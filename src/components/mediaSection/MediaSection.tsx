import { useState } from "react";
import { useParams } from "react-router-dom";
import MostPopularMedia from "./MostPopularMedia.tsx";
import AllVideos from "./AllVideos.tsx";
import ImageList from "./ImageList.tsx";
import WhiteBlurEffect from "../blurEffect/WhiteBlurEffect.tsx";

const MediaSection = ({ platform }: { platform: string }) => {
  const [activeMediaTab, setActiveMediaTab] = useState(0);
  const { id } = useParams<{ id: string }>();

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
            role="tab"
            className={`tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]`}
          >
            <MostPopularMedia id={id} platform={platform} />
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
            role="tab"
            className="tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]"
          >
            <AllVideos id={id} platform={platform} />
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
            role="tab"
            className="tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]"
          >
            <ImageList id={id} platform={platform} type="backdrops" />
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
            role="tab"
            className="tab-content relative top-1 mt-1 h-fit w-[305px] bg-white 
            md:h-fit md:w-[53vw] md:min-w-fit lg:left-[-6.5rem] lg:w-[74vw] xl:w-[1060px]"
          >
            <ImageList id={id} platform={platform} type="posters" />
            <WhiteBlurEffect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
