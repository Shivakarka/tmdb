import { useDetails } from "../../utils/customHooks.ts";
import { formattedReleaseDate } from "../../utils/helperFunctions.ts";
import { Calender, NoImage, StarIcon } from "../../utils/svgs.tsx";
import ErrorMessage from "../error/ErrorMessage.tsx";
import LoadingSpinner from "../loader/LoadingSpinner.tsx";

const CurrentSeason = ({ id }: { id: string | undefined }) => {
  const { data: SeasonData, isLoading, error } = useDetails(Number(id), "tv");

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  const currentSeason = SeasonData?.seasons?.[SeasonData?.seasons?.length - 1];
  const releaseYear = new Date(currentSeason?.air_date)
    .getFullYear()
    .toString();
  const formattedOverview =
    currentSeason?.overview ||
    `Season 1 of ${SeasonData?.name} premiered on ${formattedReleaseDate(SeasonData?.first_air_date)}`;

  const posterPath = currentSeason?.poster_path
    ? `https://media.themoviedb.org/t/p/w130_and_h195_bestv2/${currentSeason?.poster_path}`
    : NoImage;
  const rating = currentSeason?.vote_average;
  const episodeCount = currentSeason?.episode_count;
  const seasonNumber = currentSeason?.season_number;
  const nextEpisode =
    SeasonData?.next_episode_to_air || SeasonData?.last_episode_to_air;
  const episodeNumber = nextEpisode?.episode_number;
  const airDate = formattedReleaseDate(
    nextEpisode?.air_date || SeasonData?.last_episode_to_air?.air_date,
  );
  const episodeName =
    nextEpisode?.name || SeasonData?.last_episode_to_air?.name;

  return (
    <div className="my-3 flex h-fit w-full flex-col gap-3">
      <h2 className="text-2xl font-semibold">Current Season</h2>
      <div className="flex flex-col gap-3 rounded-lg bg-white shadow-lg">
        <div className="flex">
          <img
            src={posterPath}
            alt={currentSeason?.name}
            className="hidden h-[195px] w-[130px] rounded-bl-md rounded-tl-md md:block"
          />
          <div className="flex flex-col gap-3 px-2 py-4 md:border-l-2">
            <div className="flex flex-col gap-0">
              <h3 className="text-2xl font-semibold">{currentSeason?.name}</h3>
              <div className="flex w-fit items-center gap-3 text-black">
                <div className="flex h-4 items-center justify-center gap-1 rounded-full bg-black px-1 py-[1px] text-white">
                  <img
                    src={StarIcon}
                    alt="Star icon"
                    className="h-3 w-3"
                    loading="lazy"
                  />
                  <p className="text-sm">{rating}</p>
                </div>
                <p className="font-bold">{releaseYear}</p>
                <ul className="ms-4 list-disc font-bold">
                  <li>{episodeCount} Episodes</li>
                </ul>
              </div>
            </div>
            <p>{formattedOverview}</p>
            <div className="flex items-center gap-4">
              <img
                src={Calender}
                alt="calender icon"
                loading="lazy"
                className="h-5 w-5"
              />
              <p className="cursor-pointer border-b-2 border-black py-[1px] hover:opacity-70">
                {episodeName} ({`${seasonNumber}x${episodeNumber}, ${airDate}`})
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="cursor-pointer text-lg font-semibold hover:opacity-70"
      >
        View All Seasons
      </a>
    </div>
  );
};

export default CurrentSeason;
