// React
import { useEffect, useRef, useState } from "react";

// rrd imports
import { useActionData } from "react-router-dom";

// Custom hook
import { useFetch } from "../hooks/useFetch";

// Components
import { Search, ImageContainer } from "../components";

// React icons
import { FaSpinner } from "react-icons/fa";

// Toast
import { toast } from "sonner";

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const search = formData.get("search");

  if (!search) {
    toast.warning("Whoops, the search field is empty. Please enter a query!", {
      duration: 3000,
      position: "top-right",
    });

    return null;
  } else {
    return search;
  }
};

function Home() {
  const searchParamFromAction = useActionData();
  const [allImages, setAllImages] = useState([]);
  const [pageParam, setPageParam] = useState(1);
  const prevSearchParam = useRef(searchParamFromAction);

  // Random Search
  const [query, setQuery] = useState("");
  const randomWords = [
    "Tesla",
    "Paris",
    "Sunset",
    "Turkey",
    "Forests",
    "Uzbekistan",
    "Smartphone",
    "Ocean",
    "Tokyo",
    "Nature",
  ];

  useEffect(() => {
    const index = Math.floor(Math.random() * randomWords.length);
    return setQuery(randomWords[index]);
  }, []);

  // GET Data
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${searchParamFromAction ?? "tesla"}&page=${pageParam}`,
  );

  useEffect(() => {
    if (data && data.results) {
      setAllImages((prevImages) => {
        return pageParam === 1
          ? data.results
          : [...prevImages, ...data.results];
      });
    }
  }, [data, pageParam]);

  // Fix search bug when searching for new items
  useEffect(() => {
    if (searchParamFromAction !== prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchParamFromAction;
    }
  }, [searchParamFromAction]);

  // Error
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // Loading
  if (isPending) {
    return (
      <div className="loading loading-spinner mx-auto flex h-full items-center justify-center text-3xl">
        <FaSpinner />
      </div>
    );
  }

  return (
    <div className="align-elements">
      <div className="my-10">
        <Search />
      </div>

      {allImages.length > 0 && (
        <>
          <ImageContainer images={allImages} />

          <div className="my-5">
            <button
              className="btn-light btn btn-outline no-animation btn-block md:btn-lg"
              onClick={() => setPageParam(pageParam + 1)}
              type="button"
            >
              Load more
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
