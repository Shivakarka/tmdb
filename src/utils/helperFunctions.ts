import newRequest from "./api";

const formattedReleaseDate = (release_date: string) => {
  if (!release_date) return "N/A";

  return new Date(release_date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

const fetcher = (url: string) => newRequest.get(url).then((res) => res.data);

const getBorderColor = (rating: number) => {
  if (rating < 40) return "text-[rgb(219,35,96)]";
  if (rating < 70) return "text-[rgb(210,213,49)]";
  return "text-[rgb(33,208,122)]";
};

const fetchTrailer = async (
  id: number,
  sortBy: string,
  setTrailer: (key: string) => void,
) => {
  try {
    let res;
    if (sortBy === "tv") {
      res = await newRequest.get(`/tv/${id}/videos?language=en-US`);
    } else {
      res = await newRequest.get(`/movie/${id}/videos?language=en-US`);
    }
    const trailerResult = res?.data?.results?.filter(
      (item: { type: string }) => item.type === "Trailer",
    )[0];
    setTrailer(trailerResult?.key);
  } catch (error) {
    console.log(error);
  }
};

export { formattedReleaseDate, fetcher, getBorderColor, fetchTrailer };
