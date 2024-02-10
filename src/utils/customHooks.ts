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

export { useMovies };
