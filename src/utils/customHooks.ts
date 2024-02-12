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
      shouldRetryOnError: false,
    },
  );
};

const usePopularTvTrailers = () => {
  return useSWR(
    `https://api.themoviedb.org/3/trending/tv/week?language=en-US`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    },
  );
};

const useStreamingToday = () => {
  return useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
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
      shouldRetryOnError: false,
    },
  );
};

const useTrailer = (id: number, sortBy: string) => {
  return useSWR(
    sortBy === "tv"
      ? `/tv/${id}/videos?language=en-US`
      : `/movie/${id}/videos?language=en-US`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    },
  );
};

export {
  useMovies,
  usePopularMovieTrailers,
  usePopularTvTrailers,
  useStreamingToday,
  useInTheatres,
  useTrailer,
};
