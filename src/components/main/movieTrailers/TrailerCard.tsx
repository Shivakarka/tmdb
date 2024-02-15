import { TrailerListProps } from "./TrailerList";
import PlayIcon from "../../../assets/icons/play-icon.svg";
import NoImage from "../../../assets/images/noImage.svg";
import { useTrailer } from "../../../utils/customHooks";
import { useState } from "react";

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

  const closeModal = () => {
    setIsModalOpen(false);
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
        <dialog
          id="my_modal_3"
          className="modal bg-black bg-opacity-50"
          open={isModalOpen}
        >
          <div className="top-15 modal-box absolute z-[10] h-[280px] w-[300px] overflow-hidden bg-tmdbDarkBlue text-white md:h-[500px] md:min-w-[750px] lg:h-[90%] lg:min-w-[1300px]">
            <form method="dialog">
              <button
                className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 hover:bg-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <h3 className="mb-3 text-lg font-bold">{title}</h3>
            <h3 className="mb-3 text-lg font-bold">{original_name}</h3>
            <p className="mx-auto">
              <iframe
                width={
                  window.innerWidth > 1200
                    ? "100%"
                    : window.innerWidth >= 768
                      ? "700"
                      : "250"
                }
                height={
                  window.innerWidth > 1200
                    ? 700
                    : window.innerWidth >= 768
                      ? 400
                      : 200
                }
                style={{ backgroundColor: "#000" }}
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0`}
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default TrailerCard;
