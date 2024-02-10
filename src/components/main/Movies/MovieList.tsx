import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieBg from "../../../assets/images/movieCardBg.svg";
import newRequest from "../../../utils/api";

const MovieList = ({ sortBy }: { sortBy: string }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await newRequest.get(`/trending/movie/${sortBy}`);
      setMovies(data.results);
    };
    fetchMovies();
  }, [sortBy]);

  return (
    <div
      className={`flex min-h-[420px] gap-4 overflow-x-auto bg-center bg-no-repeat  pb-5`}
      style={{
        backgroundImage: `url(${MovieBg})`,
      }}
    >
      {movies?.map(
        (
          movie: { title: string; release_date: string; poster_path: string },
          index,
        ) => <MovieCard key={index} {...movie} />,
      )}
    </div>
  );
};

export default MovieList;
