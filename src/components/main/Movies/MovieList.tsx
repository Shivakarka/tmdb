import MovieCard from "./MovieCard";
import MovieBg from "../../../assets/images/movieCardBg.svg";
import { useMovies } from "../../../utils/customHooks";
import { useEffect, useState } from "react";

export type MovieList = {
  title: string;
  release_date: string;
  poster_path: string;
  id: number;
  vote_average: number;
  original_name?: string;
  first_air_date?: string;
};

const MovieList = ({ sortBy, type }: { sortBy: string,type:string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const { data, isLoading, error } = useMovies(sortBy,type);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="mx-auto flex h-[100px] w-full justify-center text-4xl">
        Error... Failed to load
      </p>
    );
  }

  return (
    <div
      className={`movie-list-container h-fit flex gap-4 overflow-x-auto bg-center bg-no-repeat pb-5 ${isMounted ? "fade-in" : ""}`}
      style={{
        backgroundImage: `url(${MovieBg})`,
      }}
    >
      {data?.results?.map((movie: MovieList) => (
        <MovieCard key={movie?.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
