import { useAggregateCredits, useCredits } from "../../utils/customHooks";
import { useEffect, useState } from "react";
import CastCardItem from "./castCardItem";

type CastCardsProps = {
  id: string | undefined;
  platform: string;
};

export type CastType = {
  id: number;
  profile_path: string;
  name: string;
  original_name: string;
  roles: { character: string }[];
  character: string;
  total_episode_count: number;
};

const CastCards = ({ id, platform }: CastCardsProps) => {
  const [displayData, setDisplayData] = useState<any>(null);

  const {
    data: CastData,
    isLoading: CastDataLoading,
    error: CastDataError,
  } = useCredits(Number(id), platform);
  const {
    data: AggregateCastData,
    isLoading: AggregateCastDataLoading,
    error: AggregateCastError,
  } = useAggregateCredits(Number(id), platform);

  useEffect(() => {
    if (platform === "movie") {
      setDisplayData(CastData);
    } else if (platform === "tv") {
      setDisplayData(AggregateCastData);
    }
  }, [CastData, AggregateCastData, platform]);

  if (CastDataLoading || AggregateCastDataLoading) {
    return (
      <div className="flex w-full justify-center md:h-[510px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (CastDataError || AggregateCastError) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-6 text-3xl md:h-[510px]">
        <p>Something went wrong. Please try again later.</p>
        <button
          className="btn btn-primary text-lg"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        {platform === "movie" ? (
          <h2 className="text-2xl font-semibold">Top Billed Cast</h2>
        ) : (
          <h2 className="text-2xl font-semibold">Series Cast</h2>
        )}
      </div>
      <div className="flex w-full gap-5  overflow-scroll bg-white p-2 lg:w-[800px] xl:w-[980px]">
        {displayData?.cast?.map((cast: CastType, index: number) => {
          if (index < 9) {
            return (
              <CastCardItem key={cast?.id} cast={cast} platform={platform} />
            );
          }
        })}
        <div className="flex w-full cursor-pointer items-center justify-center whitespace-nowrap">
          <p className=" text-lg font-bold">View More</p>
        </div>
      </div>
      <h3 className="cursor-pointer text-xl font-semibold">Full Cast & Crew</h3>
    </>
  );
};

export default CastCards;
