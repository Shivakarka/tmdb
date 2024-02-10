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

export { formattedReleaseDate, fetcher };
