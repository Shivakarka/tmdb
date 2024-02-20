import { useParams } from "react-router-dom";
import StatsAndFactsSection from "../../statsAndFacts/StatsAndFactsSection";
import CastCards from "../../castSection/CastCards";

const TvDetailsMain = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <main className="mx-auto grid h-fit grid-cols-1 px-[30px] py-[40px] md:min-h-[1500px] md:grid-cols-[60%,40%] lg:grid-cols-[3.8fr,1fr] xl:w-[1400px]">
      <section className="flex flex-col gap-3 bg-red-200 p-3">
        <CastCards id={id} platform={"tv"} />
      </section>
      <StatsAndFactsSection id={id} platform={"tv"} />
    </main>
  );
};

export default TvDetailsMain;
