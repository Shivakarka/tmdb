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

  const trailerKey = data?.results?.find(
    (item: { type: string }) => item.type === "Trailer",
  )?.key;

  if (!trailerKey) {
    return null;
  }

  return (
    <div
      className="relative flex cursor-pointer flex-col gap-2"
      onClick={() => setIsModalOpen(true)}
    >
      <div
        className="ml-2 mt-1 h-[200px] w-[300px] rounded-lg bg-cover bg-no-repeat object-contain transition-all duration-300 ease-in-out hover:scale-105"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w440_and_h660_face/${backdrop_path || poster_path || NoImage})`,
        }}
      ></div>
      <img
        src={PlayIcon}
        alt="play-icon"
        className="absolute left-[100px] top-[50px] w-[100px] invert"
      />
      {isModalOpen && (
        <dialog
          id="my_modal_3"
          className="modal bg-black bg-opacity-50"
          open={isModalOpen}
        >
          <div className="top-15 modal-box absolute z-[10] h-[280px] w-[300px]  overflow-hidden bg-[rgb(3,37,65)] text-white md:h-[500px] md:min-w-[750px] lg:h-[90%] lg:min-w-[1300px]">
            <form method="dialog">
              <button
                className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </form>
            <h3 className="mb-3 text-lg font-bold">{title}</h3>
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
