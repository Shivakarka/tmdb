import React from "react";
import MediaTrailerCard from "./MediaTrailerCard.tsx";
import { useDetails, useTrailer } from "../../utils/customHooks.ts";
import LoadingSpinner from "../loader/LoadingSpinner.tsx";
import ErrorMessage from "../error/ErrorMessage.tsx";

const MostPopularMedia = React.memo(
  ({ id, platform }: { id: string | undefined; platform: string }) => {
    const {
      data: mediaData,
      isLoading: mediaDataLoading,
      error,
    } = useDetails(Number(id), platform);
    const { data: TrailerData, isLoading: trailerDataLoading } = useTrailer(
      Number(id),
      platform,
    );

    if (mediaDataLoading || trailerDataLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    const trailerItem = TrailerData?.results?.find(
      (item: { type: string; name?: string }) => item.type === "Trailer",
    );
    const trailerKey = trailerItem?.key;
    const trailerName = (
      trailerItem?.name?.replace(/\[.*?\]/g, "").split("|")[0] || "Trailer"
    ).trim();

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
