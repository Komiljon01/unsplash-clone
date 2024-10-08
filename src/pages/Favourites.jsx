// Custom hook
import { useGlobalContext } from "../hooks/useGlobalContext";

// Components
import { ImageContainer } from "../components";

function Favourites() {
  const { likedImages } = useGlobalContext();

  if (likedImages.length === 0) {
    return <h1>You don't choose any images</h1>;
  }

  return (
    <div className="align-elements">
      {likedImages.length > 0 && <ImageContainer images={likedImages} />}
    </div>
  );
}

export default Favourites;
