import ThatsAWrap from "../components/main/ThatsAWrap";
import Welcome from "../components/main/Welcome";
import Section from "../components/main/Section";
import MovieList from "../components/main/Movies/MovieList";
import { useState } from "react";

const Home = () => {
  const [sortBy, setSortBy] = useState("day");

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

  return (
    <div>
      <Welcome />
      <ThatsAWrap />
      <Section
        title="Trending"
        items={["Today", "This Week"]}
        onToggle={handleToggleValue}
      >
        <MovieList sortBy={sortBy} />
      </Section>
    </div>
  );
};

export default Home;
