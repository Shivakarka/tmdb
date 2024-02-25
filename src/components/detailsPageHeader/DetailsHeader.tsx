import { useState } from "react";
import RatingsBar from "../main/RatingsBar/RatingsBar";
import PosterModal from "../poster/PosterModal";
import Poster from "../poster/Poster";
import TrailerModal from "../trailer/TrailerModal";
import { useParams } from "react-router-dom";
import { useCredits, useDetails, useTrailer } from "../../utils/customHooks";
import RenderCrewMembers from "./RenderCrewMembers";
import IconsList from "./IconsList";
import {
  genres,
  getCrewData,
  getTrailerKey,
  releaseDateinIndia,
} from "../../utils/helperFunctions";
import { PlayIcon } from "../../utils/svgs";
import LoadingSpinner from "../loader/LoadingSpinner";

type DetailsHeaderProps = {
  platform: string;
  location: string;
};

const DetailsHeader = ({ platform, location }: DetailsHeaderProps) => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const { data: TrailerData } = useTrailer(Number(id), platform);

  const {
    data: Data,
    isLoading: DetailsLoading,
    error: DetailsError,
  } = useDetails(Number(id), platform);
  const { data: CreditsData } = useCredits(Number(id), platform);

  if (DetailsLoading) {
    return <LoadingSpinner />;
  }

  if (DetailsError) {
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

  const genreNames = genres(Data);
  const movieReleaseYear = new Date(Data?.release_date).getFullYear();
  const movieReleaseDateInIndia = releaseDateinIndia(Data?.release_date);
  const durationInHrsMins = `${Math.floor(Data?.runtime / 60)}hr ${Data?.runtime % 60}m`;
  const rating = Math.floor(Data?.vote_average * 10);
  const directors = getCrewData(CreditsData?.crew, "Director");
  const screenwriters = getCrewData(CreditsData?.crew, "Screenplay");
  const trailerKey = getTrailerKey(TrailerData?.results);

  return (
    <section
      className={`relative grid w-full grid-cols-1 grid-rows-[20%,80%] content-center overflow-hidden 
        bg-tmdbDarkBlue bg-opacity-85 md:min-h-[510px] md:grid-cols-[30%,70%] md:grid-rows-1`}
    >
      <div
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(30, 39, 44, 0.9) 0%, rgba(30, 39, 44, 0.8) 10%), 
          url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${Data?.backdrop_path}')`,
        }}
        className={`absolute inset-0 bg-cover bg-[top_left] bg-no-repeat opacity-30 
        md:bg-[url('https://image.tmdb.org/t/p/w500${Data?.backdrop_path}')]`}
      ></div>
      <div
        className={`movieBackdrop relative flex h-[200px] w-full gap-2 md:mt-[5em] md:block md:h-full md:w-full md:bg-none lg:mt-8`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500${Data?.backdrop_path}')`,
        }}
      >
        <div
          onClick={() => setIsPosterModalOpen(!isPosterModalOpen)}
          className="cursor-pointer"
        >
          <Poster poster_path={Data?.poster_path} />
        </div>
      </div>
      {isPosterModalOpen && (
        <PosterModal
          isPosterModalOpen={isPosterModalOpen}
          setIsPosterModalOpen={setIsPosterModalOpen}
          posterUrl={Data?.poster_path}
          platform={platform}
        />
      )}
      <div
        className={
          "movieDetailMobile relative z-[100] mt-5 flex w-full flex-col items-center px-6 py-10 text-white md:items-start"
        }
      >
        <h1 className={"mb-2 text-center text-2xl font-bold md:text-4xl"}>
          {Data?.title || Data?.name}{" "}
          <span className={"font-normal text-gray-200"}>
            ({movieReleaseYear || new Date(Data?.first_air_date).getFullYear()})
          </span>
        </h1>
        <div className={"flex flex-wrap justify-center"}>
          <p className={"text-md me-8 font-normal"}>
            {platform == "movie" && movieReleaseDateInIndia}
            {Data?.first_air_date} (IN)
          </p>
          <ul
            className={
              "order-3 me-8 inline-flex text-center md:order-2 md:list-disc"
            }
          >
            <li>{genreNames}</li>
          </ul>
          {platform === "movie" && (
            <ul className={"order-2 me-8 inline-flex list-disc md:order-3"}>
              <li>{durationInHrsMins}</li>
            </ul>
          )}
        </div>
        <div className="mt-2 flex items-center gap-5 py-2">
          <div className="flex items-center gap-3 font-bold">
            <div className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <RatingsBar
                rating={rating || 0}
                size={"3.7rem"}
                thickness={"5px"}
                location={location}
                percentSize="text-[11px]"
                fontSize="text-[24px]"
              />
            </div>
            <h2>
              User <br /> Score
            </h2>
          </div>
          <IconsList />
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
          {Data?.tagline}
        </p>
        <p className={"self-start text-xl font-bold"}>Overview</p>
        <p
          className={
            "h-fit w-[95%] self-start pt-1 text-lg md:leading-5 lg:w-[80%] lg:leading-normal"
          }
        >
          {Data?.overview}
        </p>
        <div className="mt-4 grid w-full grid-cols-[1fr,1fr] gap-5 md:grid-cols-[1fr,1fr,1fr]">
          {directors && <RenderCrewMembers crew={directors} />}
          {screenwriters && <RenderCrewMembers crew={screenwriters} />}
        </div>
        {isModalOpen && (
          <TrailerModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            trailerKey={trailerKey}
          />
        )}
      </div>
    </section>
  );
};

export default DetailsHeader;
