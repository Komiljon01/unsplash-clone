// Masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Components
import { Image } from "./";

function ImageContainer({ images }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 0: 1, 500: 2, 750: 3, 1000: 4 }}
    >
      <Masonry gutter="10px">
        {images.map((image) => {
          return <Image key={image.id} image={image} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
