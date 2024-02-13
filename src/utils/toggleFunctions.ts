export const handleToggleValue = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
  switch (value) {
    case "Today":
      setState("day");
      break;
    case "This Week":
      setState("week");
      break;
    default:
      break;
  }
};

export const handleTrailerToggleValue = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
  switch (value) {
    case "Popular":
      setState("popular");
      break;
    case "Streaming":
      setState("streaming");
      break;
    case "On TV":
      setState("tv");
      break;
    case "For Rent":
      setState("rent");
      break;
    case "In Theaters":
      setState("theater");
      break;
    default:
      break;
  }
};

export const handlePopularToggleValue = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
  switch (value) {
    case "Streaming":
      setState("movie");
      break;
    case "On TV":
      setState("tv");
      break;
    case "For Rent":
      setState("rent");
      break;
    case "In Theaters":
      setState("theater");
      break;
    default:
      break;
  }
};

export const handleFreeToggleValue = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
  switch (value) {
    case "Movies":
      setState("FreeMovies");
      break;
    case "TV":
      setState("FreeTv");
      break;
    default:
      break;
  }
};
