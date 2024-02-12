import {
  useInTheatres,
  usePopularMovieTrailers,
  usePopularTvTrailers,
  useStreamingToday,
} from "../../../utils/customHooks";
import { useEffect, useState } from "react";
import TrailerCard from "./TrailerCard.tsx";

export type TrailerListProps = {
  title: string;
  release_date: string;
  backdrop_path: string;
  id: number;
  poster_path: string;
};

const TrailerList = ({ sortBy }: { sortBy: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  let data;
  const { data: PopularMovies, isLoading, error } = usePopularMovieTrailers();
  const { data: PopularTv } = usePopularTvTrailers();
  const { data: StreamingToday } = useStreamingToday();
  const { data: InTheatres } = useInTheatres();

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

  switch (sortBy) {
    case "popular":
      data = PopularMovies;
      break;
    case "tv":
      data = PopularTv;
      break;
    case "streaming":
      data = StreamingToday;
      break;
    case "rent":
      data = PopularMovies;
      break;
    case "theater":
      data = InTheatres;
      break;
  }

  return (
    <div
      className={`movie-list-container flex min-h-[420px] gap-4 overflow-x-auto bg-center bg-no-repeat pb-5 ${isMounted ? "fade-in" : ""}`}
    >
      {data?.results?.map((movie: TrailerListProps) => (
        <TrailerCard key={movie?.id} sortBy={sortBy} {...movie} />
      ))}
    </div>
  );
};

export default TrailerList;
