import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDetails, useImages, useTrailer } from "../../utils/customHooks";
import MostPopularMedia from "./MostPopularMedia";
import AllVideos from "./AllVideos";
import ImageList from "./ImageList";
import WhiteBlurEffect from "../blurEffect/WhiteBlurEffect";

const MediaSection = ({ platform }: { platform: string }) => {
  const [activeMediaTab, setActiveMediaTab] = useState(0);
  const { id } = useParams<{ id: string }>();
  const { data: mediaData, isLoading: mediaDataLoading } = useDetails(
    Number(id),
    platform,
  );
  const { data: TrailerData, isLoading: trailerDataLoading } = useTrailer(
    Number(id),
    platform,
  );
  const { data: ImageData, isLoading: imageDataLoading } = useImages(
    Number(id),
    platform,
  );

  if (mediaDataLoading || trailerDataLoading || imageDataLoading) {
    return (
      <div className="flex w-full justify-center md:h-[510px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const trailerItem = TrailerData?.results?.find(
    (item: { type: string; name?: string }) => item.type === "Trailer",
  );
  const trailerKey = trailerItem?.key;
  const trailerName = (
    trailerItem?.name?.replace(/\[.*?\]/g, "").split("|")[0] || "Trailer"
  ).trim();

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-start gap-7 lg:flex-nowrap">
        <p className="text-2xl font-semibold">Media</p>
        <div role="tablist" className="tabs tabs-bordered relative">
          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab whitespace-nowrap pr-1 text-sm font-semibold md:pr-2 md:text-lg"
            aria-label="Most Popular"
            onClick={() => setActiveMediaTab(0)}
            checked={activeMediaTab === 0}
            readOnly
          />
          <div
            role="tabpanel"
            className={`tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]`}
          >
            <MostPopularMedia
              mediaData={mediaData}
              trailerKey={trailerKey}
              trailerName={trailerName}
            />
            <WhiteBlurEffect />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab pr-1 text-sm font-semibold md:pr-2 md:text-lg"
            aria-label="Videos"
            onClick={() => setActiveMediaTab(1)}
            checked={activeMediaTab === 1}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]"
          >
            <AllVideos TrailerData={TrailerData} />
            <WhiteBlurEffect />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab pr-1 text-sm font-semibold md:pr-2 md:text-lg"
            aria-label="Backdrops"
            onClick={() => setActiveMediaTab(2)}
            checked={activeMediaTab === 2}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]"
          >
            <ImageList data={ImageData?.backdrops} type="backdrops" />
            <WhiteBlurEffect />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab pr-1 text-sm font-semibold md:pr-2 md:text-lg"
            aria-label="Posters"
            onClick={() => setActiveMediaTab(3)}
            checked={activeMediaTab === 3}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]"
          >
            <ImageList data={ImageData?.posters} type="posters" />
            <WhiteBlurEffect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
