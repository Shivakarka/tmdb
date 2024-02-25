import { useParams } from "react-router-dom";
import StatsAndFactsSection from "../../statsAndFacts/StatsAndFactsSection.tsx";
import CastCards from "../../castSection/CastCards.tsx";
import SocialSection from "../../socialSection/SocialSection.tsx";
import MediaSection from "../../mediaSection/MediaSection.tsx";
import Recommendations from "../../recommendations/Recommendations.tsx";

const MovieDetailsMain = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <main
      className="mx-auto grid h-fit grid-cols-1 overflow-x-hidden px-[30px] py-[40px] md:min-h-[1500px] 
    md:grid-cols-[60%,40%] lg:grid-cols-[80%,20%] xl:w-[1450px] xl:grid-cols-[77%,21%]"
    >
      <section className="flex flex-col gap-3 p-3">
        <CastCards id={id} platform={"movie"} />
        <hr />
        <SocialSection platform="movie" />
        <hr />
        <MediaSection platform="movie" />
        <hr />
        <Recommendations id={id} platform={"movie"} />
      </section>
      <StatsAndFactsSection id={id} platform={"movie"} />
    </main>
  );
};

export default MovieDetailsMain;
