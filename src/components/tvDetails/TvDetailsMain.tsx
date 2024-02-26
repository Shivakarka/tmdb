import { useParams } from "react-router-dom";
import StatsAndFactsSection from "../statsAndFacts/StatsAndFactsSection.tsx";
import CastCards from "../castSection/CastCards.tsx";
import CurrentSeason from "../currentSeason/CurrentSeason.tsx";
import SocialSection from "../socialSection/SocialSection.tsx";
import MediaSection from "../mediaSection/MediaSection.tsx";
import Recommendations from "../recommendations/Recommendations.tsx";

const TvDetailsMain = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <main
      className="mx-auto grid h-fit grid-cols-1 overflow-x-hidden px-[30px] py-[40px] md:min-h-[1500px] 
    md:grid-cols-[60%,40%] lg:grid-cols-[80%,20%] xl:w-[1450px] xl:grid-cols-[77%,21%]"
    >
      <section className="flex flex-col gap-3 p-3">
        <CastCards id={id} platform={"tv"} />
        <hr />
        <CurrentSeason id={id} />
        <hr />
        <SocialSection platform="tv" />
        <hr />
        <MediaSection platform="tv" />
        <hr />
        <Recommendations id={id} platform={"tv"} />
      </section>
      <StatsAndFactsSection id={id} platform={"tv"} />
    </main>
  );
};

export default TvDetailsMain;
