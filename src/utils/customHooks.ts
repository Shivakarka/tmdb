import useSWR from "swr";
import { fetcher } from "./helperFunctions";

const useMovies = (sortBy: string) => {
  return useSWR(
    `https://api.themoviedb.org/3/trending/movie/${sortBy}?language=en-US`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};

const usePopularMovieTrailers = () => {
  return useSWR(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};

const usePopularTvTrailers = () => {
  return useSWR(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};

const useStreamingToday = () => {
  return useSWR(
    `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};

const useInTheatres = () => {
  return useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};

export {
  useMovies,
  usePopularMovieTrailers,
  usePopularTvTrailers,
  useStreamingToday,
  useInTheatres,
};
