import MovieCard from "./MovieCard";
import MovieBg from "../../../assets/images/movieCardBg.svg";
import { useMovies } from "../../../utils/customHooks";

export type MovieList = {
  title: string;
  release_date: string;
  poster_path: string;
  id: number;
  vote_average: number;
};

const MovieList = ({ sortBy }: { sortBy: string }) => {
  const { data, isLoading, error } = useMovies(sortBy);

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
      className={`flex min-h-[420px] gap-4 overflow-x-auto bg-center bg-no-repeat  pb-5`}
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