import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import HomePage from "../../assets/icons/homePage.svg";
import Keyboard from "../../assets/icons/keyboard.svg";
import Report from "../../assets/icons/report.svg";
import { formatNumberWithCommas } from "../../utils/helperFunctions";
import Contributers from "../contributers/Contributers";
import { Graph } from "../../utils/svgs";
import {
  useDetails,
  useExternalIds,
  useKeywords,
} from "../../utils/customHooks";

type StatsAndFactsSectionProps = {
  id: string | undefined;
  platform: string;
};

const StatsAndFactsSection = ({ id, platform }: StatsAndFactsSectionProps) => {
  const { data: DetailsData } = useDetails(Number(id), platform);
  const { data: KeywordsData } = useKeywords(Number(id), platform);
  const { data: SocialMediaData } = useExternalIds(Number(id), platform);

  return (
    <div className="flex flex-col gap-8 bg-white px-[20px] py-[30px]">
      <section className="flex flex-col gap-8" title="facts">
        <div className="flex items-center gap-4">
          {SocialMediaData?.facebook_id && (
            <a
              href={`https://www.facebook.com/${SocialMediaData?.facebook_id}`}
            >
              <img src={Facebook} alt="facebook" />
            </a>
          )}
          {SocialMediaData?.twitter_id && (
            <a href={`https://twitter.com/${SocialMediaData?.twitter_id}`}>
              <img src={Twitter} alt="twitter" />
            </a>
          )}
          {SocialMediaData?.instagram_id && (
            <a href={`https://instagram.com/${SocialMediaData?.instagram_id}`}>
              <img src={Instagram} alt="instagram" />
            </a>
          )}
          {DetailsData?.homepage && (
            <>
              <div className="h-[25px] w-[1px] bg-gray-400"></div>
              <a href={`${DetailsData?.homepage}`}>
                <img src={HomePage} alt="homepage" />
              </a>
            </>
          )}
        </div>
        <div className="leading-5">
          <p>
            <strong>Status</strong>
          </p>
          <p>{DetailsData?.status}</p>
        </div>
        {DetailsData?.networks && (
          <div className="leading-5">
            <p>
              <strong>Network</strong>
            </p>
            {DetailsData?.networks?.map(
              (network: { id: number; logo_path: string }) => (
                <img
                  src={`https://media.themoviedb.org/t/p/h60${network?.logo_path}`}
                  alt="network image"
                  className="h-15 w-20 py-2"
                  key={network?.id}
                />
              ),
            )}
          </div>
        )}
        {DetailsData?.type && (
          <div className="leading-5">
            <p>
              <strong>Type</strong>
            </p>
            <p>{DetailsData?.type}</p>
          </div>
        )}
        <div className="leading-5">
          <p>
            <strong>Original Language</strong>
          </p>
          <p>{DetailsData?.spoken_languages?.[0]?.english_name}</p>
        </div>
        {DetailsData?.budget >= 0 && (
          <div className="leading-5">
            <p>
              <strong>Budget</strong>
            </p>
            {DetailsData?.budget > 0 ? (
              <p>${formatNumberWithCommas(DetailsData?.budget)}.00</p>
            ) : (
              "-"
            )}
          </div>
        )}
        {DetailsData?.revenue >= 0 && (
          <div className="leading-5">
            <p>
              <strong>Revenue</strong>
            </p>
            {DetailsData?.revenue > 0 ? (
              <p>${formatNumberWithCommas(DetailsData?.revenue)}.00</p>
            ) : (
              "-"
            )}
          </div>
        )}
      </section>
      <section title="keywords">
        <p>
          <strong>Keywords</strong>
        </p>
        <ul className=" flex cursor-pointer flex-wrap gap-2 whitespace-nowrap">
          {KeywordsData?.keywords?.map(
            (keyword: { id: number; name: string }) => (
              <li
                key={keyword.id}
                className="rounded-md bg-gray-200 px-2 py-1 text-sm"
              >
                {keyword.name}
              </li>
            ),
          )}
          {!KeywordsData?.keywords?.length && "No keywords have been added"}
        </ul>
      </section>
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
