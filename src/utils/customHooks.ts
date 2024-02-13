import useSWR from "swr";
import { fetcher } from "./helperFunctions.ts";

const useFetchData = (url: string) => {
  return useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
  });
};

const useMovies = (sortBy: string, type: string) => {
  let url = '';
  switch (sortBy) {
    case "theater":
      url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      break;
    case "rent":
      url = "https://api.themoviedb.org/3/trending/tv/week?language=en-US";
      break;
    default:
      url = `https://api.themoviedb.org/3/${type === "Trending" ? `trending/movie/${sortBy}` : `${sortBy}/popular`}?language=en-US&page=1`;
  }
  return useFetchData(url);
};

const useStreamingToday = () => {
  return useFetchData("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");
};

const useInTheatres = () => {
  return useFetchData("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1");
};

const useTrailer = (id: number, sortBy: string) => {
  const url = sortBy === "tv" ? `/tv/${id}/videos?language=en-US` : `/movie/${id}/videos?language=en-US`;
  return useFetchData(url);
};

const usePopularMovieTrailers = () => {
  return useFetchData(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
  );
};

const usePopularTvTrailers = () => {
  return useFetchData(
    `https://api.themoviedb.org/3/trending/tv/week?language=en-US`
  );
};

export {
  useMovies,
  useStreamingToday,
  useInTheatres,
  useTrailer,
  usePopularMovieTrailers,
  usePopularTvTrailers,
};
