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

function formatNumberWithCommas(number: number): string {
  if (!number) return "N/A";
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const truncateReviewContent = (content: string) => {
  const words = content.split(" ");
  const truncatedContent = words.slice(0, 100).join(" ");
  if (words.length > 100) {
    return truncatedContent + "... read the rest";
  }
  return truncatedContent;
};

export {
  formattedReleaseDate,
  fetcher,
  getBorderColor,
  formatNumberWithCommas,
  formatDate,
  truncateReviewContent,
};
