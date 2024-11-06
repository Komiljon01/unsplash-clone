// React icons
import { FaHeart } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";

// Custom hook
import { useGlobalContext } from "../hooks/useGlobalContext";

// rrd imports
import { Link } from "react-router-dom";

function Image({ image, likedImage }) {
  const { links, urls, alt_description, user } = image;
  const { likedImages, dispatch } = useGlobalContext();

  const addLikedImage = (image, event) => {
    event.preventDefault();

    const alreadyAdded = likedImages.some((img) => {
      return img.id === image.id;
    });

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };

  const downloadImage = (event) => {
    event.preventDefault();

    window.open(`${links.download}&force=true}`, "_blank");
  };

  return (
    <Link to={`/image-info/${image.id}`} className="cursor-zoom-in">
      <div className="group relative">
        <span
          className={`hover-icons right-3 top-3 z-[1] grid h-6 w-8 cursor-pointer place-items-center rounded bg-gray-300/90 md:h-8 md:w-10 ${
            likedImage ? "bg-red-600 hover:bg-red-500" : "hover:bg-white"
          }`}
          onClick={(e) => addLikedImage(image, e)}
        >
          <FaHeart
            className={`text-xs md:text-[14px] dark:text-black ${
              likedImage && "text-white dark:text-white"
            }`}
          />
        </span>

        <span className="hover-icons bottom-3 left-3 z-[1] flex items-center gap-2">
          <img
            src={user.profile_image.small}
            alt={user.bio}
            className="h-5 w-5 rounded-full md:h-6 md:w-6"
          />

          <div className="text-gray-200">
            <p className="text-[14px] font-medium">
              {user.first_name} {user.last_name}
            </p>
            {user.for_hire && (
              <p className="flex items-center gap-1 text-[14px]">
                Available for hire{" "}
                <IoIosCheckmarkCircle className="text-white/80" />
              </p>
            )}
          </div>
        </span>

        <img
          src={urls.regular}
          alt={alt_description}
          className="w-full rounded-md group-hover:brightness-75"
        />

        <span className="hover-icons bottom-3 right-3 grid h-6 w-8 cursor-pointer place-items-center rounded bg-gray-300/90 hover:bg-white md:h-8 md:w-10">
          <span onClick={(e) => downloadImage(e)}>
            <GoArrowDown className="text-sm md:text-[18px] dark:text-black" />
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Image;
