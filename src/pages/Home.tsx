import ThatsAWrap from "../components/main/banner/ThatsAWrap.tsx";
import Welcome from "../components/main/banner/Welcome.tsx";
import Section from "../components/main/Section.tsx";
import MovieList from "../components/main/movieCards/MovieList.tsx";
import { useState } from "react";
import TrailerList from "../components/main/movieTrailers/TrailerList.tsx";
import {
  handleFreeToggleValue,
  handlePopularToggleValue,
  handleToggleValue,
  handleTrailerToggleValue,
} from "../utils/toggleFunctions.ts";

const Home = () => {
  const [sortBy, setSortBy] = useState("day");
  const [sortTrailer, setSortTrailer] = useState("day");
  const [sortPopular, setSortPopular] = useState("tv");
  const [sortFree, setSortFree] = useState("FreeMovies");
  const [trailerBackground, setTrailerBackground] = useState("bg-tmdbDarkBlue");

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
        bgImage={trailerBackground}
      >
        <TrailerList
          key={sortTrailer}
          sortBy={sortTrailer}
          setTrailerBackground={setTrailerBackground}
        />
      </Section>
      <Section
        title="What's Popular"
        items={["Streaming", "On TV", "For Rent", "In Theaters"]}
        onToggle={(value) => handlePopularToggleValue(value, setSortPopular)}
      >
        <MovieList key={sortPopular} sortBy={sortPopular} type={"Popular"} />
      </Section>
      <Section
        title="Free to Watch"
        items={["Movies", "TV"]}
        onToggle={(value) => handleFreeToggleValue(value, setSortFree)}
      >
        <MovieList key={sortFree} sortBy={sortFree} type={"Free"} />
      </Section>
    </div>
  );
};

export default Home;
