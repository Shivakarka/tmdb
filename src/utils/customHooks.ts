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
    url = `https://api.themoviedb.org/3/trending/all/${sortBy}?language=en-US&page=1`;
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
    url = `https://api.themoviedb.org/3/discover/${sortBy === "FreeMovies" ? "movie" : "tv"}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&with_watch_monetization_types=free`;
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

const useKeywords = (id: number, type: string) => {
  return useFetchData(
    `https://api.themoviedb.org/3/${type}/${id}/keywords?language=en-US`,
  );
};

const useExternalIds = (id: number, type: string) => {
  return useFetchData(
    `https://api.themoviedb.org/3/${type}/${id}/external_ids?language=en-US`,
  );
};

const useDetails = (id: number, type: string) => {
  return useFetchData(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
  );
};

const useCredits = (id: number, type: string) => {
  let creditsType = "";
  if (type === "movie") {
    creditsType = "credits";
  } else {
    creditsType = "aggregate_credits";
  }

  return useFetchData(
    `https://api.themoviedb.org/3/${type}/${id}/${creditsType}?language=en-US`,
  );
};

const useReviews = (id: number, type: string) => {
  return useFetchData(
    `https://api.themoviedb.org/3/${type}/${id}/reviews?language=en-US&page=1`,
  );
};

const useImages = (id: number, type: string) => {
  return useFetchData(`https://api.themoviedb.org/3/${type}/${id}/images`);
};

const useRecommendations = (id: number, type: string) => {
  return useFetchData(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`,
  );
};

const useSearch = (
  query: string,
  type: string | undefined,
  page: string | undefined,
) => {
  if (!page) page = "1";

  if (!type) type = "movie";

  return useFetchData(
    `https://api.themoviedb.org/3/search/${type}?query=${query}&language=en-US&page=${page}&include_adult=false`,
  );
};

export {
  useMovies,
  useStreamingToday,
  useInTheatres,
  useTrailer,
  usePopularMovieTrailers,
  usePopularTvTrailers,
  useKeywords,
  useExternalIds,
  useDetails,
  useCredits,
  useReviews,
  useImages,
  useRecommendations,
  useSearch,
};
