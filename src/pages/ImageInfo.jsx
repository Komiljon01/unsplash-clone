// rrd imports
import { useParams } from "react-router-dom";

// Custom hook
import { useFetch } from "../hooks/useFetch";

// React icons
import {
  FaCalendarAlt,
  FaCloudDownloadAlt,
  FaEye,
  FaSpinner,
  FaUser,
} from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";

function ImageInfo() {
  // Image ID
  const { id } = useParams();

  // GET image data
  const { data, isPending, error } =
    useFetch(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}
`);

  if (!data) return null;

  const {
    urls,
    alt_description,
    user,
    created_at,
    likes,
    location,
    downloads,
    views,
  } = data;

  // Loading
  if (isPending) {
    return (
      <div className="loading loading-spinner mx-auto flex h-full items-center justify-center text-3xl">
        <FaSpinner />
      </div>
    );
  }

  // Error
  if (error) {
    <h1>Error: {error}</h1>;
  }

  return (
    <div className="align-elements py-10">
      {data && (
        <>
          <h2 className="mb-5 text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
            Image Details
          </h2>

          <div className="flex flex-col justify-center gap-10 md:flex-row">
            <img
              src={urls.regular}
              alt={alt_description || "Image"}
              className="rounded-md md:w-1/2"
            />

            <div className="text-lg md:text-xl">
              <div className="flex items-center gap-2">
                <FaUser />
                <span className="font-bold">Author:</span>
                <p>
                  {user.first_name} {user.last_name}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt />

                <span className="font-bold">Created:</span>
                <p>{created_at.split("T")[0]}</p>
              </div>

              <div className="flex items-center gap-2">
                <BiSolidLike />

                <span className="font-bold">Likes:</span>
                <p>{likes}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <FaLocationPin />

                <span className="font-bold">Location:</span>
                <p>{location.name}</p>
              </div>

              <div className="flex items-center gap-2">
                <FaCloudDownloadAlt />

                <span className="font-bold">Downloads:</span>
                <p>{downloads}</p>
              </div>

              <div className="flex items-center gap-2">
                <FaEye />

                <span className="font-bold">Views:</span>
                <p>{views}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ImageInfo;
