import {
  useInTheatres,
  usePopularMovieTrailers,
  usePopularTvTrailers,
  useStreamingToday,
} from "../../../utils/customHooks.ts";
import { useEffect, useState } from "react";
import TrailerCard from "./TrailerCard.tsx";
import LoadingSpinner from "../../loader/LoadingSpinner.tsx";
import ErrorMessage from "../../error/ErrorMessage.tsx";

export type TrailerCardProps = {
  title: string;
  release_date: string;
  backdrop_path: string;
  id: number;
  poster_path: string;
  original_name?: string;
  setTrailerBackground?: React.Dispatch<React.SetStateAction<string>>;
};

type TrailerListProps = {
  setTrailerBackground?: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
};

const TrailerList = ({ sortBy, setTrailerBackground }: TrailerListProps) => {
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
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage location="trailer" />;
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
    <div>
      <div
        className={`movie-list-container flex h-fit min-h-[300px] gap-4 overflow-x-auto bg-center bg-no-repeat pb-3 ${isMounted ? "fade-in" : ""}`}
      >
        {data?.results?.map((movie: TrailerCardProps) => (
          <TrailerCard key={movie?.id} sortBy={sortBy} setTrailerBackground={setTrailerBackground} {...movie} />
        ))}
      </div>
      <div
        className="absolute right-0 top-0 h-full w-[40px]"
        style={{
          backgroundImage: "linear-gradient(to right,rgba(255,255,255,0),#fff)",
        }}
      ></div>
    </div>
  );
};

export default TrailerList;
