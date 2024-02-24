import Keyboard from "../../assets/icons/keyboard.svg";
import Report from "../../assets/icons/report.svg";
import Contributers from "./Contributers";
import { Graph } from "../../utils/svgs";
import {
  useDetails,
  useExternalIds,
  useKeywords,
} from "../../utils/customHooks";
import Facts from "./Facts";
import Keywords from "./Keywords";

type StatsAndFactsSectionProps = {
  id: string | undefined;
  platform: string;
};

const StatsAndFactsSection = ({ id, platform }: StatsAndFactsSectionProps) => {
  const { data: DetailsData, isLoading: DetailsDataLoading } = useDetails(
    Number(id),
    platform,
  );
  const { data: KeywordsData, isLoading: KeywordsDataLoading } = useKeywords(
    Number(id),
    platform,
  );
  const { data: SocialMediaData, isLoading: SocialMediaDataLoading } =
    useExternalIds(Number(id), platform);

  if (DetailsDataLoading || KeywordsDataLoading || SocialMediaDataLoading) {
    return (
      <div className="flex w-full justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 bg-white px-[20px] py-[30px]">
      <Facts SocialMediaData={SocialMediaData} DetailsData={DetailsData} />
      <Keywords KeywordsData={KeywordsData} />
      <hr />
      <section title="content_score">
        <h4>
          <strong>Content</strong>
        </h4>
        <div className=" rounded-lg bg-gray-200">
          <div className="w-full  ">
            <div className="rounded-tl-lg rounded-tr-lg bg-black px-2 text-[16px] font-bold text-white">
              100
            </div>
          </div>
          <p className="px-2 py-1 text-[14px]">Yes! Looking good!</p>
        </div>
      </section>
      <section className="flex flex-col gap-4" title="leaderboard">
        <h4>
          <strong>Top Contributers</strong>
        </h4>
        <Contributers />
      </section>
      <section title="Popularity">
        <h4 className="text-lg">
          <strong>Popularity Trend</strong>
        </h4>
        <div className="mt-4 h-12">
          <Graph />
        </div>
      </section>
      <div className="text-md w-fit cursor-pointer rounded-full bg-black px-[20px] py-[6px] font-bold text-white">
        <p>EDIT PAGE</p>
      </div>
      <div className="flex cursor-pointer items-center gap-2 opacity-60">
        <img src={Keyboard} alt="keyboard icon" width={20} height={20} />
        <p>Keyboard Shortcuts</p>
      </div>
      <div className="flex cursor-pointer items-center gap-2 opacity-60">
        <img src={Report} alt="Report icon" width={20} height={20} />
        <p>Report an issue</p>
      </div>
    </div>
  );
};

export default StatsAndFactsSection;
