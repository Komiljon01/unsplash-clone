// React icons
import { FaHeart } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Image({ image }) {
  const { links, urls, alt_description, user } = image;

  return (
    <div className="group relative">
      <span
        className={`hover-icons right-3 top-3 z-[1] grid h-6 w-8 cursor-pointer place-items-center rounded bg-gray-300/90 hover:bg-white md:h-8 md:w-10`}
      >
        <FaHeart className={`text-xs md:text-[14px] dark:text-black`} />
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
        <a
          target="_blank"
          rel="nofollow"
          download
          href={`${links.download}&force=true`}
        >
          <GoArrowDown className="text-sm md:text-[18px] dark:text-black" />
        </a>
      </span>
    </div>
  );
}

export default Image;
