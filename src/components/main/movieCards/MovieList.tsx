import MovieCard from "./MovieCard";
import { useMovies } from "../../../utils/customHooks.ts";
import { useEffect, useState } from "react";
import LoadingShimmer from "../shimmer/LoadingShimmer.tsx";
import { MovieBg } from "../../../utils/svgs";

export type MovieList = {
  title: string;
  release_date: string;
  poster_path: string;
  id: number;
  vote_average: number;
  name?: string;
  first_air_date?: string;
};

const MovieList = ({ sortBy, type }: { sortBy: string; type: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const { data, isLoading, error } = useMovies(sortBy, type);

  if (isLoading) {
    return <LoadingShimmer />;
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
      className={`movie-list-container flex h-fit gap-4 overflow-x-auto 
      bg-bottom bg-no-repeat pb-5 ${isMounted ? "fade-in" : ""}`}
      style={{
        backgroundImage: type === "Trending" ? `url(${MovieBg})` : "none",
      }}
    >
      {data?.results?.map((movie: MovieList) => (
        <MovieCard key={movie?.id} {...movie} />
      ))}
      <div
        className="absolute right-9 top-[80px] h-[70%] w-[60px] md:right-10 lg:right-0"
        style={{
          backgroundImage: "linear-gradient(to right,rgba(255,255,255,0),#fff)",
        }}
      ></div>
    </div>
  );
};

export default MovieList;
