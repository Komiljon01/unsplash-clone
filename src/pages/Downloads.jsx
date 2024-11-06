// rrd imports
import { Link } from "react-router-dom";

// Custom Hook
import { useGlobalContext } from "../hooks/useGlobalContext";

function Downloads() {
  const { downloads } = useGlobalContext();

  if (downloads.length == 0) {
    return (
      <div className="align-elements flex h-full flex-col items-center justify-center gap-10">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl">
          Ready to download? Find your favorites now!
        </h1>
        <Link to="/" className="btn btn-primary btn-sm sm:btn-md">
          Go Home
        </Link>
      </div>
    );
  }

  return <div>Downloads</div>;
}

export default Downloads;
