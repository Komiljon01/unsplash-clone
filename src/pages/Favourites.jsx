// Custom hook
import { useGlobalContext } from "../hooks/useGlobalContext";

// Components
import { ImageContainer } from "../components";

// rrd imports
import { Link } from "react-router-dom";

function Favourites() {
  const { likedImages } = useGlobalContext();

  if (likedImages.length === 0) {
    return (
      <div className="align-elements flex h-full flex-col items-center justify-center gap-10">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl">
          No favorites? Explore and start curating your top picks!
        </h1>
        <Link to="/" className="btn btn-primary btn-sm sm:btn-md">
          Add Favorites
        </Link>
      </div>
    );
  }

  return (
    <div className="align-elements py-10">
      {likedImages.length > 0 && <ImageContainer images={likedImages} />}
    </div>
  );
}

export default Favourites;
