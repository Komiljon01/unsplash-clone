// Masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Components
import { Image } from "./";

// Custom hook
import { useGlobalContext } from "../hooks/useGlobalContext";

function ImageContainer({ images }) {
  const { likedImages, downloads } = useGlobalContext();

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 0: 1, 500: 2, 750: 3, 1000: 4 }}
    >
      <Masonry gutter="15px">
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              image={image}
              likedImage={likedImages.some((img) => img.id === image.id)}
              downloadedImage={downloads.some((img) => img.id === image.id)}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
