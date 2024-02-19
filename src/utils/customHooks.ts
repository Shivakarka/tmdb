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
  let url = "";

  if (type === "Trending") {
    url = `https://api.themoviedb.org/3/trending/movie/${sortBy}?language=en-US&page=1`;
  }

  if (type === "Popular") {
    switch (sortBy) {
      case "theater":
        url =
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
        break;
      case "rent":
        url =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=rent";
        break;
      default:
        url = `https://api.themoviedb.org/3/${sortBy}/popular?language=en-US&page=1`;
    }
  }

  if (type === "Free") {
    // movies / tv shows with no monetiary cost
    url = `https://api.themoviedb.org/3/discover/${sortBy === "FreeMovies" ? "movie" : "tv"}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=free`;
  }

  return useFetchData(url);
};

const useStreamingToday = () => {
  return useFetchData(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  );
};

const useInTheatres = () => {
  return useFetchData(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  );
};

const useTrailer = (id: number, sortBy: string) => {
  const url =
    sortBy === "tv"
      ? `/tv/${id}/videos?language=en-US`
      : `/movie/${id}/videos?language=en-US`;
  return useFetchData(url);
};

const usePopularMovieTrailers = () => {
  return useFetchData(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  );
};

const usePopularTvTrailers = () => {
  return useFetchData(
    `https://api.themoviedb.org/3/trending/tv/week?language=en-US`,
  );
};

const useMovieDetails = (id: number) => {
  return useFetchData(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  );
};

const useMovieCredits = (id: number) => {
  return useFetchData(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
  );
};

const useTvDetails = (id: number) => {
  return useFetchData(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);
};

export {
  useMovies,
  useStreamingToday,
  useInTheatres,
  useTrailer,
  usePopularMovieTrailers,
  usePopularTvTrailers,
  useMovieDetails,
  useMovieCredits,
  useTvDetails,
};
