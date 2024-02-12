import ThatsAWrap from "../components/main/ThatsAWrap";
import Welcome from "../components/main/Welcome";
import Section from "../components/main/Section";
import MovieList from "../components/main/Movies/MovieList";
import { useState } from "react";
import TrailerList from "../components/main/Trailers/TrailerList";

const Home = () => {
  const [sortBy, setSortBy] = useState("day");
  const [sortTrailer, setSortTrailer] = useState("day");

  const handleToggleValue = (value: string) => {
    switch (value) {
      case "Today":
        setSortBy("day");
        break;
      case "This Week":
        setSortBy("week");
        break;
      default:
        break;
    }
  };

  const handleTrailerToggleValue = (value: string) => {
    switch (value) {
      case "Popular":
        setSortTrailer("popular");
        break;
      case "Streaming":
        setSortTrailer("streaming");
        break;
      case "On TV":
        setSortTrailer("tv");
        break;
      case "For Rent":
        setSortTrailer("rent");
        break;
      case "In Theaters":
        setSortTrailer("theater");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Welcome />
      <ThatsAWrap />
      <Section
        title="Trending"
        items={["Today", "This Week"]}
        onToggle={handleToggleValue}
      >
        <MovieList key={sortBy} sortBy={sortBy} />
      </Section>
      <Section
        title="Latest Trailers"
        items={["Popular", "Streaming", "On TV", "For Rent", "In Theaters"]}
        onToggle={handleTrailerToggleValue}
      >
        <TrailerList key={sortTrailer} sortBy={sortTrailer} />
      </Section>
    </div>
  );
};

export default Home;
