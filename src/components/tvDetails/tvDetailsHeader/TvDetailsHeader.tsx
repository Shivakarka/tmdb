import { useParams } from "react-router-dom";
import { useTrailer, useTvDetails } from "../../../utils/customHooks";
import RatingsBar from "../../main/RatingsBar/RatingsBar";
import AddToListIcon from "../../../assets/icons/AddToList.svg";
import WatchListIcon from "../../../assets/icons/watchList.svg";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import StarIcon from "../../../assets/icons/Star.svg";
import PlayIcon from "../../../assets/icons/play-icon.svg";
import ExpandIcon from "../../../assets/icons/expandIcon.svg";
import { useState } from "react";
import TrailerModal from "../../trailer/TrailerModal";
import PosterModal from "../../posterModal/PosterModal";

const TvDetailsHeader = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posterBlur, setPosterBlur] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const { data: TrailerData } = useTrailer(Number(id), "tv");

  const {
    data: TvData,
    isLoading: isTvDetailsLoading,
    error: TvDetailsError,
  } = useTvDetails(Number(id));

  if (isTvDetailsLoading) {
    return (
      <div className="flex w-full justify-center md:h-[510px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (TvDetailsError) {
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

  const genreNames = TvData?.genres
    ?.map((genre: { name: string }) => genre.name)
    .join(", ");

  const releaseYear = new Date(TvData?.first_air_date).getFullYear();

  const rating = Math.floor(TvData?.vote_average * 10);

  const trailerKey = TrailerData?.results?.find(
    (item: { type: string; name?: string }) => item.type === "Trailer",
  )?.key;

  return (
    <div>
      <div
        className={
          "relative grid w-full grid-cols-1 grid-rows-[20%,80%] content-center overflow-hidden bg-[rgb(32,11,11)] md:h-[510px] md:grid-cols-[30%,70%] md:grid-rows-1"
        }
      >
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(30, 39, 44, 0.9) 0%, rgba(30, 39, 44, 0.8) 10%), url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${TvData?.backdrop_path}')`,
          }}
          className={`absolute inset-0 bg-cover bg-[top_left] bg-no-repeat opacity-30 md:bg-[url('https://image.tmdb.org/t/p/w500${TvData?.backdrop_path}')]`}
        ></div>
        <div
          className={`movieBackdrop relative flex h-[180px] w-full gap-2 md:mt-[5em] md:block md:h-full md:w-full md:bg-none lg:mt-8`}
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500${TvData?.backdrop_path}')`,
          }}
        >
          <div
            onMouseEnter={() => setPosterBlur(true)}
            onMouseLeave={() => setPosterBlur(false)}
            onClick={() => setIsPosterModalOpen(!isPosterModalOpen)}
          >
            {!posterBlur && (
              <img
                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${TvData?.poster_path}`}
                alt={"poster"}
                className={
                  " ml-2 mt-1 h-fit w-[100px] md:ml-auto md:mt-0 md:h-fit md:w-fit md:pl-0 "
                }
                style={{ borderRadius: "8px" }}
              />
            )}
            {posterBlur && (
              <div className="relative cursor-pointer">
                <img
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_multi_faces_filter(blur)${TvData?.poster_path}`}
                  alt={"poster"}
                  className={
                    " ml-2 mt-1 h-fit w-[100px] md:ml-auto md:mt-0 md:h-fit md:w-fit md:pl-0 "
                  }
                  style={{ borderRadius: "8px" }}
                />
                <div className="absolute right-5 top-[3.8rem] flex items-center justify-center gap-2 md:right-[6rem] md:top-[10rem] lg:top-[12rem]">
                  <img
                    src={ExpandIcon}
                    alt="expand icon"
                    className="hidden h-[26px] w-[26px] md:block"
                  />
                  <p className=" text-xl text-white">Expand</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {isPosterModalOpen && (
          <PosterModal
            isPosterModalOpen={isPosterModalOpen}
            setIsPosterModalOpen={setIsPosterModalOpen}
            posterUrl={TvData?.poster_path}
          />
        )}
        <div
          className={
            "movieDetailMobile relative mt-5 flex w-full flex-col items-center px-6 py-10 text-white md:items-start"
          }
        >
          <h1 className={"text-2xl font-bold md:text-4xl"}>
            {TvData?.original_name}{" "}
            <span className={"font-normal text-gray-200"}>({releaseYear})</span>
          </h1>
          <div className={"flex flex-wrap justify-center"}>
            <ul
              className={
                "order-3 me-8 ms-5 inline-flex text-center md:order-2 md:list-disc"
              }
            >
              <li>{genreNames}</li>
            </ul>
          </div>
          <div className="mt-2 flex items-center gap-5 py-2">
            <div className="flex items-center gap-3 font-bold">
              <div className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                <RatingsBar
                  rating={rating || 0}
                  size={"3.7rem"}
                  thickness={"5px"}
                  location="tvDetails"
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
            {trailerKey && (
              <div className="h-9 w-[2px] bg-gray-600 md:hidden"></div>
            )}
            {trailerKey && (
              <div
                className="flex cursor-pointer items-center gap-2 transition-all duration-300 ease-in-out hover:opacity-60"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="h-5 w-5 invert">
                  <img src={PlayIcon} alt="Play Icon" />
                </div>
                <div className="text-md font-bold">Play Trailer</div>
              </div>
            )}
          </div>
          <p className={"self-start py-2 text-lg italic text-gray-200"}>
            {TvData?.tagline}
          </p>
          <p className={"self-start text-xl font-bold"}>Overview</p>
          <p className={"w-[95%] self-start pt-1 text-lg lg:w-[80%]"}>
            {TvData?.overview}
          </p>
          {isModalOpen && (
            <TrailerModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              trailerKey={trailerKey}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TvDetailsHeader;
