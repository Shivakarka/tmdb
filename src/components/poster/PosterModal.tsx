import DislikeIcon from "../../assets/icons/dislikeIcon.svg";
import LikeIcon from "../../assets/icons/likeIcon.svg";
import LockIcon from "../../assets/icons/lockIcon.svg";
import TickIcon from "../../assets/icons/tickIcon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import CrossIcon from "../../assets/icons/cross.svg";
import { useParams } from "react-router-dom";
import { useImages } from "../../utils/customHooks";
import { useState } from "react";

type PosterModalProps = {
  isPosterModalOpen: boolean;
  setIsPosterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  posterUrl: string;
  platform: string;
};

const PosterModal = ({
  isPosterModalOpen,
  setIsPosterModalOpen,
  posterUrl,
  platform,
}: PosterModalProps) => {
  const { id } = useParams();
  const [posterUrlCount, setPosterUrlCount] = useState(0);
  const [poster, setPoster] = useState(posterUrl);
  const { data, isLoading } = useImages(Number(id), platform);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center md:h-[510px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const closeModal = () => {
    setIsPosterModalOpen(false);
  };

  const handleNextClick = () => {
    if (posterUrlCount === data?.posters.length - 1) {
      setPosterUrlCount(0);
    } else {
      setPosterUrlCount(posterUrlCount + 1);
    }
    setPoster(data?.posters[posterUrlCount + 1]?.file_path);
  };

  const handlePrevClick = () => {
    if (posterUrlCount === 0) {
      setPosterUrlCount(data?.posters.length - 1);
    } else {
      setPosterUrlCount(posterUrlCount - 1);
    }
    setPoster(data?.posters[posterUrlCount - 1]?.file_path);
  };

  return (
    <dialog
      id="my_modal_3"
      className="modal bg-black bg-opacity-50"
      open={isPosterModalOpen}
    >
      <div
        className="top-15 modal-box absolute z-[10] h-[80vh] w-[280px] overflow-hidden bg-white 
      text-black md:h-[500px] md:min-w-[600px] lg:h-[85%] lg:min-w-[900px]"
      >
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 hover:bg-gray-700"
          onClick={closeModal}
        >
          ✕
        </button>
        <div className="grid grid-cols-1 md:grid-cols-[60%.40%]">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`}
            alt="poster"
            className="h-[370px] md:h-[450px] lg:h-full"
            loading="lazy"
          />
          <div className="mx-auto flex flex-col gap-3 p-3 md:flex md:flex-col md:justify-center md:gap-3 lg:gap-5">
            <div className="flex justify-between md:w-[220px] lg:w-[340px]">
              <img
                src={DislikeIcon}
                alt="dislike icon"
                className="h-7 cursor-pointer"
              />
              <img
                src={LikeIcon}
                alt="like icon"
                className="h-7 cursor-pointer"
              />
            </div>
            <div className="hidden items-center justify-between md:flex md:w-[220px] lg:w-[340px]">
              <p>Info</p>
              <img src={LockIcon} alt="lock icon" className="h-5" />
            </div>
            <div className="hidden md:block">
              <hr />
            </div>
            <div className="hidden items-center gap-1 md:flex">
              <p className="text-sm">Primary?</p>
              <img
                src={posterUrlCount === 0 ? TickIcon : CrossIcon}
                alt="lock icon"
                className="h-4"
              />
            </div>
            <div className=" hidden flex-col md:flex">
              <p className="text-sm font-normal">Added by</p>
              <p>Unknown</p>
            </div>
            <div className="hidden flex-col md:flex">
              <p className="text-sm font-normal">Size</p>
              <p>
                {data?.posters[posterUrlCount]?.width}x
                {data?.posters[posterUrlCount]?.height}
              </p>
            </div>
            <div className="hidden flex-col gap-2 md:flex">
              <p className="text-sm font-normal">Language</p>
              <select
                className=" select select-bordered w-full max-w-xs"
                disabled
                defaultValue={"English"}
              >
                <option>English</option>
              </select>
            </div>
            <div className="hidden justify-between md:flex">
              <p className="text-md font-normal">Tagged People</p>
              <img
                src={PlusIcon}
                alt="lock icon"
                className="h-4 cursor-pointer invert"
              />
            </div>
            <div className="hidden md:block">
              <hr />
            </div>
            <p>No records have been added.</p>
            <div className="flex justify-between">
              {posterUrlCount > 0 && (
                <img
                  src={RightArrow}
                  alt="lock icon"
                  className=" h-8 rotate-180 cursor-pointer invert"
                  onClick={handlePrevClick}
                />
              )}
              {posterUrlCount < data?.posters.length - 1 && (
                <img
                  src={RightArrow}
                  alt="lock icon"
                  className="ml-auto h-8 cursor-pointer invert"
                  onClick={handleNextClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PosterModal;
