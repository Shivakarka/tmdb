import React from "react";
import MediaTrailerCard from "./MediaTrailerCard.tsx";

type MostPopularMediaProps = {
  mediaData: any;
  trailerKey: string;
  trailerName: string;
};

const MostPopularMedia = React.memo(
  ({ trailerKey, trailerName, mediaData }: MostPopularMediaProps) => {
    return (
      <>
        <div className="flex h-[300px] w-fit overflow-y-hidden overflow-x-scroll">
          {trailerKey && (
            <MediaTrailerCard
              trailerKey={trailerKey}
              trailerName={trailerName}
            />
          )}
          {mediaData?.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${mediaData?.backdrop_path}`}
              alt="poster"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          )}
          {mediaData?.poster_path && (
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${mediaData?.poster_path}`}
              alt="poster"
              className="h-full w-fit "
              loading="lazy"
            />
          )}
        </div>
      </>
    );
  },
);

export default MostPopularMedia;
