import PlayIcon from "../../assets/icons/play-icon.svg";
import TrailerModal from "../trailer/TrailerModal";

type MostPopularMediaProps = {
  mediaData: any;
  trailerKey: string;
  trailerName: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
};

const MostPopularMedia = ({
  trailerKey,
  setIsModalOpen,
  isModalOpen,
  trailerName,
  mediaData,
}: MostPopularMediaProps) => {
  return (
    <>
      <div className="flex h-[300px] w-fit overflow-y-hidden overflow-x-scroll">
        {trailerKey && (
          <div onClick={() => setIsModalOpen(true)} className="w-full">
            <div
              className="h-[300px] w-[300px] bg-cover bg-center bg-no-repeat object-contain md:w-[350px] lg:w-[533px]"
              style={{
                backgroundImage: `url(https://i.ytimg.com/vi/${trailerKey}/hqdefault.jpg)`,
              }}
            ></div>
            <img
              src={PlayIcon}
              alt="play-icon"
              className="relative left-[80px] top-[-70%] w-[100px] cursor-pointer invert hover:opacity-50 md:left-[100px] lg:left-[200px] "
            />
          </div>
        )}
        <img
          src={`https://image.tmdb.org/t/p/original${mediaData?.backdrop_path}`}
          alt="poster"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${mediaData?.poster_path}`}
          alt="poster"
          className="h-full w-fit "
          loading="lazy"
        />
      </div>
      {isModalOpen && (
        <TrailerModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          trailerKey={trailerKey}
          trailerTitle={trailerName}
        />
      )}
    </>
  );
};

export default MostPopularMedia;
