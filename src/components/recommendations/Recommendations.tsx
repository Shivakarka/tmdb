import { useRecommendations } from "../../utils/customHooks";
import { useState } from "react";
import RecommendationItem from "./RecommendationItem";

const Recommendations = ({
  id,
  platform,
}: {
  id: string | undefined;
  platform: string;
}) => {
  const {
    data: RecommendationsData,
    isLoading: RecommendationsLoading,
    error: RecommendationsError,
  } = useRecommendations(Number(id), platform);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  if (RecommendationsLoading) {
    return (
      <div className="flex w-full justify-center md:h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (RecommendationsError) {
    return (
      <div className="flex w-full justify-center md:h-[300px]">
        <h3 className="text-xl font-bold">Error... Failed to Load Data</h3>
      </div>
    );
  }

  return (
    <section className="mt-4 flex flex-col gap-4">
      <h2 className="text-[22.4px] font-semibold">Recommendations</h2>
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden lg:w-[980px]">
        {RecommendationsData?.results?.map((item: any, index: number) => (
          <RecommendationItem
            item={item}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            key={item?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
