import { useCredits } from "../../utils/customHooks.ts";
import WhiteBlurEffect from "../blurEffect/WhiteBlurEffect.tsx";
import ErrorMessage from "../error/ErrorMessage.tsx";
import LoadingSpinner from "../loader/LoadingSpinner.tsx";
import CastCardItem from "./CastCardItem.tsx";

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
    return <LoadingSpinner />;
  }

  if (CastDataError) {
    return <ErrorMessage />;
  }

  return (
    <div className="relative flex flex-col gap-3">
      <div>
        {platform === "movie" ? (
          <h2 className="text-2xl font-semibold">Top Billed Cast</h2>
        ) : (
          <h2 className="text-2xl font-semibold">Series Cast</h2>
        )}
      </div>
      <WhiteBlurEffect />
      <div className="flex w-full gap-5 overflow-scroll p-2 pb-6">
        {CastData?.cast?.map((cast: CastType, index: number) => {
          if (index < 9) {
            return (
              <CastCardItem key={cast?.id} cast={cast} platform={platform} />
            );
          }
        })}
        {CastData?.cast.length > 7 && (
          <div className="flex w-full cursor-pointer items-center justify-center whitespace-nowrap">
            <p className=" text-lg font-bold">View More</p>
          </div>
        )}
        {CastData?.cast.length === 0 && (
          <p className="text-lg font-normal">
            We don't have any cast added to this{" "}
            {platform === "tv" ? "TV Show" : "movie"}. You can help by adding
            some!
          </p>
        )}
      </div>
      <h3 className="mb-4 cursor-pointer text-[17.6px] font-semibold hover:opacity-60">
        {CastData?.cast.length > 0
          ? "Full Cast & Crew"
          : "Add Missing Cast & Crew"}
      </h3>
    </div>
  );
};

export default CastCards;
