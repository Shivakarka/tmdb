import { useRecommendations } from "../../utils/customHooks.ts";
import { useState } from "react";
import RecommendationItem from "./RecommendationItem.tsx";
import WhiteBlurEffect from "../blurEffect/WhiteBlurEffect.tsx";
import LoadingSpinner from "../loader/LoadingSpinner.tsx";
import ErrorMessage from "../error/ErrorMessage.tsx";

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
    return <LoadingSpinner />;
  }

  if (RecommendationsError) {
    return <ErrorMessage />;
  }

  if (RecommendationsData?.results?.length === 0) {
    return null;
  }

  return (
    <section className="relative mt-4 flex flex-col gap-4">
      <h2 className="text-[22.4px] font-semibold">Recommendations</h2>
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden lg:w-full">
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
      <WhiteBlurEffect />
    </section>
  );
};

export default Recommendations;
