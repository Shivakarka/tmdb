import { useEffect } from "react";
import MovieDetailsMain from "../components/movieDetails/MovieDetailsMain.tsx";
import DetailsHeader from "../components/detailsPageHeader/DetailsHeader.tsx";

const MovieDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DetailsHeader platform="movie" location="movieDetails" />
      <MovieDetailsMain />
    </>
  );
};

export default MovieDetailsPage;
