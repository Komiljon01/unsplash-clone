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

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const search = formData.get("search");

  return search;
};

function Home() {
  const searchParamFromAction = useActionData();
  const [allImages, setAllImages] = useState([]);
  const [pageParam, setPageParam] = useState(1);
  const prevSearchParam = useRef(searchParamFromAction);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${searchParamFromAction ?? "all"}&page=${pageParam}`,
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

  useEffect(() => {
    if (searchParamFromAction !== prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchParamFromAction;
    }
  }, [searchParamFromAction]);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

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
