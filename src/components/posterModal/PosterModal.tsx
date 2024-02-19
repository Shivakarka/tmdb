import DislikeIcon from "../../assets/icons/dislikeIcon.svg";
import LikeIcon from "../../assets/icons/likeIcon.svg";
import LockIcon from "../../assets/icons/lockIcon.svg";
import TickIcon from "../../assets/icons/tickIcon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

type PosterModalProps = {
  isPosterModalOpen: boolean;
  setIsPosterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  posterUrl: string;
};

const PosterModal = ({
  isPosterModalOpen,
  setIsPosterModalOpen,
  posterUrl,
}: PosterModalProps) => {
  const closeModal = () => {
    setIsPosterModalOpen(false);
  };
  return (
    <dialog
      id="my_modal_3"
      className="modal bg-black bg-opacity-50"
      open={isPosterModalOpen}
    >
      <div className="top-15 modal-box absolute z-[10] h-[400px] w-[280px] overflow-hidden bg-white text-black md:h-[500px] md:min-w-[600px] lg:h-[85%] lg:min-w-[900px]">
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 hover:bg-gray-700"
            onClick={closeModal}
          >
            ✕
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-[60%.40%]">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterUrl}`}
            alt="poster"
            className="h-[370px] md:h-[450px] lg:h-full"
            loading="lazy"
          />
          <div className="mx-auto hidden p-3 md:flex md:flex-col md:justify-center md:gap-3 lg:gap-5">
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
            <div className="flex items-center justify-between md:w-[220px] lg:w-[340px]">
              <p>Info</p>
              <img src={LockIcon} alt="lock icon" className="h-5" />
            </div>
            <hr />
            <div className="flex items-center gap-1">
              <p className="text-sm">Primary?</p>
              <img src={TickIcon} alt="lock icon" className="h-4" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-normal">Added by</p>
              <p>Unknown</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-normal">Size</p>
              <p>3000x2000</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal">Language</p>
              <select
                className=" select select-bordered w-full max-w-xs"
                disabled
              >
                <option selected>English</option>
              </select>
            </div>
            <div className="flex justify-between">
              <p className="text-md font-normal">Tagged People</p>
              <img
                src={PlusIcon}
                alt="lock icon"
                className="h-4 cursor-pointer invert"
              />
            </div>
            <hr />
            <p>No records have been added.</p>
            <img
              src={RightArrow}
              alt="lock icon"
              className="ml-auto h-8 cursor-pointer invert"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PosterModal;
