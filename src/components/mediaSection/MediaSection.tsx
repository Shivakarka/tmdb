import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDetails, useImages, useTrailer } from "../../utils/customHooks";
import MostPopularMedia from "./MostPopularMedia";
import AllVideos from "./AllVideos";
import Backdrops from "./Backdrops";

const MediaSection = ({ platform }: { platform: string }) => {
  const [activeMediaTab, setActiveMediaTab] = useState(0);
  const { id } = useParams<{ id: string }>();
  const { data: mediaData } = useDetails(Number(id), platform);
  const { data: TrailerData } = useTrailer(Number(id), platform);
  const { data: ImageData } = useImages(Number(id), platform);

  const trailerItem = TrailerData?.results?.find(
    (item: { type: string; name?: string }) => item.type === "Trailer",
  );

  const trailerKey = trailerItem?.key;
  const trailerName = (
    trailerItem?.name?.replace(/\[.*?\]/g, "").split("|")[0] || "Trailer"
  ).trim();

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-start gap-10 lg:flex-nowrap">
        <p className="text-2xl font-semibold">Media</p>
        <div role="tablist" className="tabs tabs-bordered relative">
          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab whitespace-nowrap pr-1 text-sm font-semibold md:pr-1 md:text-lg lg:pr-2"
            aria-label="Most Popular"
            onClick={() => setActiveMediaTab(0)}
            checked={activeMediaTab === 0}
            readOnly
          />
          <div
            role="tabpanel"
            className={`tab-content relative top-1 mt-1 h-fit w-[300px] bg-white  md:h-fit md:min-w-fit lg:left-[-6.5rem] lg:w-[700px] xl:w-[980px]`}
          >
            <MostPopularMedia
              mediaData={mediaData}
              trailerKey={trailerKey}
              trailerName={trailerName}
            />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab text-sm font-semibold md:text-lg"
            aria-label="Videos"
            onClick={() => setActiveMediaTab(1)}
            checked={activeMediaTab === 1}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative top-1 mt-1 h-fit w-[300px] bg-white md:h-fit md:min-w-fit lg:left-[-6.5rem] lg:w-[700px] xl:w-[980px]"
          >
            <AllVideos TrailerData={TrailerData} />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab text-sm font-semibold md:text-lg"
            aria-label="Backdrops"
            onClick={() => setActiveMediaTab(2)}
            checked={activeMediaTab === 2}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative top-1 mt-1 h-fit w-[300px] bg-white md:h-fit md:min-w-fit lg:left-[-6.5rem] lg:w-[700px] xl:w-[980px]"
          >
            <Backdrops ImageData={ImageData} />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            className="tab text-sm font-semibold md:text-lg"
            aria-label="Posters"
            onClick={() => setActiveMediaTab(3)}
            checked={activeMediaTab === 3}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative left-[-5rem] top-1 h-[150px] w-[300px] md:h-[150px] md:w-[120%] lg:w-[700px] xl:w-[980px]"
          >
            Tab 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
