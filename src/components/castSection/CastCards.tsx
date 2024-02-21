import { useCredits } from "../../utils/customHooks";
import CastCardItem from "./CastCardItem.tsx";
import CastDataErrorMessage from "./CastDataErrorMessage";

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
  const {
    data: CastData,
    isLoading: CastDataLoading,
    error: CastDataError,
  } = useCredits(Number(id), platform);

  if (CastDataLoading) {
    return (
      <div className="flex w-full justify-center md:h-[510px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (CastDataError) {
    return <CastDataErrorMessage />;
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
        {CastData?.cast?.map((cast: CastType, index: number) => {
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
