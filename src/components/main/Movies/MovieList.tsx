import MovieCard from "./MovieCard";
import MovieBg from "../../../assets/images/movieCardBg.svg";
import { useMovies } from "../../../utils/customHooks";

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
      {data?.results?.map(
        (
          movie: { title: string; release_date: string; poster_path: string },
          index: number,
        ) => <MovieCard key={index} {...movie} />,
      )}
    </div>
  );
};

export default MovieList;
