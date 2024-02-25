import { TrailerListProps } from "./TrailerList";
import { useTrailer } from "../../../utils/customHooks";
import { useState } from "react";
import TrailerModal from "../../trailer/TrailerModal";
import { NoImage, PlayIcon } from "../../../utils/svgs";

const TrailerCard = ({
  backdrop_path,
  poster_path,
  title,
  id,
  sortBy,
  original_name,
}: TrailerListProps & { sortBy: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, error } = useTrailer(id, sortBy);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  }

  if (error) {
    console.log(error.message);
  }

  const trailerItem = data?.results?.find(
    (item: { type: string; name?: string }) => item.type === "Trailer",
  );

  const trailerKey = trailerItem?.key;
  const trailerName = (
    trailerItem?.name?.replace(/\[.*?\]/g, "").split("|")[0] || "Trailer"
  ).trim();

  const openModal = () => {
    setIsModalOpen(true);
  };

  if (!trailerKey) {
    return null;
  }

  return (
    <div className="relative mt-2 flex cursor-pointer flex-col gap-2 text-white">
      <div
        className={"transition-all duration-300 ease-in-out hover:scale-105"}
        onClick={openModal}
      >
        <div
          className="ml-2 mt-1 h-[169px] w-[300px] rounded-lg bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
              backdrop_path || poster_path || NoImage
            })`,
          }}
        ></div>
        <img
          src={PlayIcon}
          alt="play-icon"
          className="absolute left-[100px] top-[50px] w-[100px] cursor-pointer invert transition-all duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        {title && (
          <p className="mt-2 text-center text-lg font-bold ">{title}</p>
        )}
        {original_name && (
          <p className="mt-2 text-center text-lg font-bold ">{original_name}</p>
        )}
        {title && (
          <p className="text-center text-lg font-normal">{trailerName}</p>
        )}
        {original_name && (
          <p className="text-center text-lg font-normal ">{trailerName}</p>
        )}
      </div>

      {isModalOpen && (
        <TrailerModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          trailerKey={trailerKey}
          trailerTitle={title || original_name}
        />
      )}
    </div>
  );
};

export default TrailerCard;
