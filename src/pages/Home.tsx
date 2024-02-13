import ThatsAWrap from "../components/main/ThatsAWrap.tsx";
import Welcome from "../components/main/Welcome.tsx";
import Section from "../components/main/Section.tsx";
import MovieList from "../components/main/Movies/MovieList.tsx";
import { useState } from "react";
import TrailerList from "../components/main/Trailers/TrailerList.tsx";
import { handlePopularToggleValue, handleToggleValue, handleTrailerToggleValue } from "../utils/toggleFunctions.ts";

const Home = () => {
  const [sortBy, setSortBy] = useState("day");
  const [sortTrailer, setSortTrailer] = useState("day");
  const [sortPopular, setSortPopular] = useState("tv");

  return (
    <div>
      <Welcome />
      <ThatsAWrap />
      <Section
        title="Trending"
        items={["Today", "This Week"]}
        onToggle={(value) => handleToggleValue(value, setSortBy)}
      >
        <MovieList key={sortBy} sortBy={sortBy} type={"Trending"} />
      </Section>
      <Section
        title="Latest Trailers"
        items={["Popular", "Streaming", "On TV", "For Rent", "In Theaters"]}
        onToggle={(value) => handleTrailerToggleValue(value, setSortTrailer)}
      >
        <TrailerList key={sortTrailer} sortBy={sortTrailer} />
      </Section>
      <Section
        title="What's Popular"
        items={["Streaming", "On TV", "For Rent", "In Theaters"]}
        onToggle={(value) => handlePopularToggleValue(value, setSortPopular)}
      >
        <MovieList key={sortPopular} sortBy={sortPopular} type={"Popular"} />
      </Section>
    </div>
  );
};

export default Home;
