import React, { useState } from "react";
import TrailerModal from "../trailer/TrailerModal";
import { PlayIcon } from "../../utils/svgs";

type MediaTrailerCardProps = {
  trailerKey: string;
  trailerName: string;
};

const MediaTrailerCard = React.memo(
  ({ trailerKey, trailerName }: MediaTrailerCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <>
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
  },
);

export default MediaTrailerCard;
