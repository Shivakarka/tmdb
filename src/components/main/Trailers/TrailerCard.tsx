import { TrailerListProps } from "./TrailerList";
import PlayIcon from "../../../assets/icons/play-icon.svg";
import NoImage from "../../../assets/images/noImage.svg";
import newRequest from "../../../utils/api";
import { useEffect, useState } from "react";

const TrailerCard = ({
  backdrop_path,
  poster_path,
  title,
  id,
  sortBy,
}: TrailerListProps & { sortBy: string }) => {
  const [trailer, setTrailer] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        if (sortBy == "tv") {
          const res = await newRequest.get(
            `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
          );
          setTrailer(res?.data?.results?.[0]?.key);
        } else {
          const res = await newRequest.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          );
          setTrailer(res?.data?.results?.[0]?.key);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrailer();
  }, [id, sortBy]);

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
        <dialog id="my_modal_3" className="modal " open={isModalOpen}>
          <div className="modal-box w-11/12 max-w-5xl bg-[rgb(3,37,65)] text-white">
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
                width={"100%"}
                height={500}
                style={{ backgroundColor: "#000" }}
                src={`https://www.youtube.com/embed/${trailer}?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`}
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
