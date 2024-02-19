import {
  useMovieCredits,
  useMovieDetails,
} from "../../../utils/customHooks.ts";
import RatingsBar from "../../main/RatingsBar/RatingsBar.tsx";
import AddToListIcon from "../../../assets/icons/AddToList.svg";
import WatchListIcon from "../../../assets/icons/watchList.svg";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import StarIcon from "../../../assets/icons/Star.svg";
import PlayIcon from "../../../assets/icons/play-icon.svg";
import { useParams } from "react-router-dom";

const MovieDetailsHeader = () => {
   const { id } = useParams();

  const {
    data: MovieData,
    isLoading: isMovieDetailsLoading,
    error: MovieDetailsError,
  } = useMovieDetails(Number(id));
  const { data: MovieCreditsData } = useMovieCredits(Number(id));

  if (isMovieDetailsLoading) {
    return (
      <div className="flex w-full justify-center md:h-[510px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (MovieDetailsError) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-6 text-5xl md:h-[510px]">
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

  const genreNames = MovieData?.genres
    ?.map((genre: { name: string }) => genre.name)
    .join(", ");

  const releaseYear = new Date(MovieData?.release_date).getFullYear();
  const releaseDateInIndia = new Date(MovieData?.release_date)
    .toLocaleDateString("en-IN", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$2/$1/$3");

  const durationInHrsMins = `${Math.floor(MovieData?.runtime / 60)}hr ${MovieData?.runtime % 60}m`;
  const rating = Math.floor(MovieData?.vote_average * 10);

  const directors = MovieCreditsData?.crew.filter(
    (person: { job: string }) => person.job === "Director",
  );
  const screenwriters = MovieCreditsData?.crew.filter(
    (person: { job: string }) => person.job === "Screenplay",
  );
  return (
    <div>
      <div
        className={
          "relative grid w-full grid-cols-1 grid-rows-[20%,80%] content-center overflow-hidden bg-[rgb(32,11,11)] md:h-[510px] md:grid-cols-[30%,70%] md:grid-rows-1"
        }
      >
        <div
          style={{
            backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${MovieData?.backdrop_path}')`,
          }}
          className={`absolute inset-0 bg-cover bg-[top_left] bg-no-repeat opacity-30 md:bg-[url('https://image.tmdb.org/t/p/w500${MovieData?.backdrop_path}')]`}
        ></div>
        <div
          className={`movieBackdrop relative flex h-[180px] w-full gap-2 md:mt-[5em] md:block md:h-full md:w-full md:bg-none lg:mt-8`}
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500${MovieData?.backdrop_path}')`,
          }}
        >
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${MovieData?.poster_path}`}
            alt={"poster"}
            className={
              " ml-2 mt-1 h-fit w-[100px] md:ml-auto md:mt-0 md:h-fit md:w-fit md:pl-0 "
            }
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div
          className={
            "movieDetailMobile relative mt-5 flex w-full flex-col items-center px-6 py-10 text-white md:items-start"
          }
        >
          <h1 className={"text-2xl font-bold md:text-4xl"}>
            {MovieData?.title}{" "}
            <span className={"font-normal text-gray-200"}>({releaseYear})</span>
          </h1>
          <div className={"flex flex-wrap justify-center"}>
            <p className={"text-md me-8 font-normal"}>
              {releaseDateInIndia} (IN)
            </p>
            <ul
              className={
                "order-3 me-8 inline-flex text-center md:order-2 md:list-disc"
              }
            >
              <li>{genreNames}</li>
            </ul>
            <ul className={"order-2 me-8 inline-flex list-disc md:order-3"}>
              <li>{durationInHrsMins}</li>
            </ul>
          </div>
          <div className="mt-2 flex items-center gap-5 py-2">
            <div className="flex items-center gap-3 font-bold">
              <div className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                <RatingsBar
                  rating={rating || 0}
                  size={"3.7rem"}
                  thickness={"5px"}
                  location="movieDetail"
                  percentSize="text-[11px]"
                  fontSize="text-[24px]"
                />
              </div>
              <h2>
                User <br /> Score
              </h2>
            </div>
            <div className="hidden cursor-pointer gap-5 md:flex">
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Add to List"
              >
                <img src={AddToListIcon} alt="AddToList Icon" />
              </div>
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Mark as favorite"
              >
                <img src={HeartIcon} alt="Heart Icon" />
              </div>
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Add to your watchlist"
              >
                <img src={WatchListIcon} alt="WatchList Icon" />
              </div>
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Rate it!"
              >
                <img src={StarIcon} alt="Star Icon" />
              </div>
            </div>
            <div className="h-9 w-[2px] bg-gray-600 md:hidden"></div>
            <div className="flex cursor-pointer items-center gap-2 transition-all duration-300 ease-in-out hover:opacity-60">
              <div className="h-5 w-5 invert">
                <img src={PlayIcon} alt="Play Icon" />
              </div>
              <div className="text-md font-bold">Play Trailer</div>
            </div>
          </div>
          <p className={"self-start py-2 text-lg italic text-gray-200"}>
            {MovieData?.tagline}
          </p>
          <p className={"self-start text-xl font-bold"}>Overview</p>
          <p className={"w-[95%] self-start pt-1 text-lg"}>
            {MovieData?.overview}
          </p>
          <div
            className={
              "mt-4 grid w-full grid-cols-[1fr,1fr] gap-5 md:grid-cols-[1fr,1fr,1fr]"
            }
          >
            {directors &&
              directors.map((director: { name: string; id: number }) => (
                <div key={director.id}>
                  <p className="text-lg font-bold">{director.name}</p>
                  <p>Director</p>
                </div>
              ))}
            {screenwriters &&
              screenwriters.map(
                (screenwriter: { name: string; id: number }) => (
                  <div key={screenwriter.id}>
                    <p className="text-lg font-bold">{screenwriter.name}</p>
                    <p>Screenplay</p>
                  </div>
                ),
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;