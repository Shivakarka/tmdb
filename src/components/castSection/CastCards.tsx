import { useCredits } from "../../utils/customHooks";
import NoImage from "../../assets/images/noImage.svg";

type CastCardsProps = {
  id: string | undefined;
  platform: string;
};

const CastCards = ({ id, platform }: CastCardsProps) => {
  const { data: CastData } = useCredits(Number(id), platform);

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
        {CastData?.cast?.map(
          (
            cast: {
              id: number;
              profile_path: string;
              name: string;
              character: string;
            },
            index: number,
          ) => {
            if (index < 9) {
              return (
                <div
                  key={cast.id}
                  className="flex min-h-[271px] min-w-[140px] flex-col gap-2 rounded-md shadow-md"
                >
                  {cast.profile_path ? (
                    <img
                      src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                      alt={cast.name}
                      className="cursor-pointer rounded-t-md"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-[175px] w-[138px] rounded-t-md bg-gray-300">
                      <img src={NoImage} alt="No image" loading="lazy" />
                    </div>
                  )}
                  <div className="px-2 py-1">
                    <h3 className="cursor-pointer font-bold hover:opacity-50">
                      {cast.name}
                    </h3>
                    <p>{cast.character}</p>
                  </div>
                </div>
              );
            }
          },
        )}
        <div className="flex w-full cursor-pointer items-center justify-center whitespace-nowrap">
          <p className=" text-lg font-bold">View More</p>
        </div>
      </div>
      <h3 className="cursor-pointer text-xl font-semibold">Full Cast & Crew</h3>
    </>
  );
};

export default CastCards;
