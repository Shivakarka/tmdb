import { useEffect } from "react";
import MovieDetailsHeader from "../components/movieDetails/movieDetailsHeader/MovieDetailsHeader";
import MovieDetailsMain from "../components/movieDetails/movieDetailsMain/MovieDetailsMain";

const MovieDetailsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <MovieDetailsHeader />
      <MovieDetailsMain />
    </>
  );
};

export default MovieDetailsPage;
