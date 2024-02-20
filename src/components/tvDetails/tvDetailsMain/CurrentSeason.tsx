import { useDetails } from "../../../utils/customHooks";
import { formattedReleaseDate } from "../../../utils/helperFunctions";
import StarIcon from "../../../assets/icons/star.svg";
import Calender from "../../../assets/icons/calender.svg";
import NoImage from "../../../assets/images/noImage.svg";

const CurrentSeason = ({ id }: { id: string | undefined }) => {
  const { data: SeasonData } = useDetails(Number(id), "tv");

  const releaseYear = new Date(
    SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]?.air_date,
  ).getFullYear();

  return (
    <div className="flex h-fit flex-col gap-3  ">
      <h2 className="text-2xl font-semibold">Current Season</h2>
      <div className="flex flex-col gap-3 rounded-lg bg-white shadow-lg ">
        <div className="flex">
          {SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]
            ?.poster_path ? (
            <img
              src={`https://media.themoviedb.org/t/p/w130_and_h195_bestv2/${SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]?.poster_path}`}
              alt={SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]?.name}
              className="h-[195px] w-[130px] rounded-bl-md rounded-tl-md"
            />
          ) : (
            <img
              src={NoImage}
              alt={"no Image"}
              className="h-[195px] w-[130px] rounded-bl-md rounded-tl-md"
            />
          )}
          <div className="flex flex-col gap-3 border-l-2 px-2 py-4">
            <div className="flex flex-col gap-0">
              <h3 className="text-2xl font-semibold">
                {SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]?.name}
              </h3>
              <div className="flex w-fit items-center gap-3   text-black ">
                <div className="flex h-4 items-center justify-center gap-1 rounded-full bg-black px-1 py-[1px] text-white">
                  <img
                    src={StarIcon}
                    alt="Star icon"
                    className="h-3 w-3 "
                    loading="lazy"
                  />
                  <p className="text-sm">
                    {
                      SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]
                        ?.vote_average
                    }
                  </p>
                </div>
                <p className="font-bold">{releaseYear}</p>
                <ul className="ms-4 list-disc font-bold">
                  <li>
                    {
                      SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]
                        ?.episode_count
                    }{" "}
                    Episodes
                  </li>
                </ul>
              </div>
            </div>
            <p>
              {SeasonData?.seasons?.[SeasonData?.seasons?.length - 1]
                ?.overview ||
                `Season 1 of ${SeasonData?.name} premiered on ${formattedReleaseDate(SeasonData?.first_air_date)}.`}
            </p>
            {SeasonData?.next_episode_to_air ? (
              <div className="flex items-center gap-4">
                <img
                  src={Calender}
                  alt="calender icon"
                  loading="lazy"
                  className="h-5 w-5"
                />
                <p className="cursor-pointer border-b-2 border-black py-[1px] hover:opacity-60">
                  {SeasonData?.next_episode_to_air?.name}
                </p>
                <p>
                  (
                  {`${SeasonData?.next_episode_to_air?.season_number}x${SeasonData?.next_episode_to_air?.episode_number}, 
                ${formattedReleaseDate(SeasonData?.next_episode_to_air?.air_date)}`}
                  )
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <img
                  src={Calender}
                  alt="calender icon"
                  loading="lazy"
                  className="h-5 w-5"
                />
                <p className="cursor-pointer border-b-2 border-black py-[1px] hover:opacity-60">
                  {SeasonData?.last_episode_to_air?.name}
                </p>
                <p>
                  (
                  {`${SeasonData?.last_episode_to_air?.season_number}x${SeasonData?.last_episode_to_air?.episode_number}, 
                ${formattedReleaseDate(SeasonData?.last_episode_to_air?.air_date)}`}
                  )
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <a href="#" className="text-lg font-semibold">
        View All Seasons
      </a>
    </div>
  );
};

export default CurrentSeason;
