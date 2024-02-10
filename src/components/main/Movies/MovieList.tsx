import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieBg from "../../../assets/images/movieCardBg.svg";

const api_key = import.meta.env.VITE_API_KEY;

const MovieList = ({ sortBy }: { sortBy: string }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${sortBy}?api_key=${api_key}&language=en-US&page=1`,
      );
      const data = await response.json();
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
