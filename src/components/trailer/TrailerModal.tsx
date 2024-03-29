type TrailerModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  trailerKey: string;
  trailerTitle?: string;
};

const TrailerModal = ({
  isModalOpen,
  setIsModalOpen,
  trailerKey,
  trailerTitle = "Play Trailer",
}: TrailerModalProps) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <dialog
      id="my_modal_3"
      className="modal bg-black bg-opacity-50"
      open={isModalOpen}
    >
      <div className="top-15 modal-box absolute z-[100] h-[280px] w-[300px] overflow-hidden bg-black text-white md:h-[500px] md:min-w-[750px] lg:h-[83%] lg:min-w-[1300px]">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 hover:bg-gray-700"
          onClick={closeModal}
        >
          ✕
        </button>
        <h3 className="mb-3 text-lg font-bold">{trailerTitle}</h3>
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
  );
};

export default TrailerModal;
