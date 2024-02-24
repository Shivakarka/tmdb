import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import HomePage from "../../assets/icons/homePage.svg";
import { formatNumberWithCommas } from "../../utils/helperFunctions";

const Facts = ({
  SocialMediaData,
  DetailsData,
}: {
  SocialMediaData: any;
  DetailsData: any;
}) => {
  return (
    <section className="flex flex-col gap-8" title="facts">
      <div className="flex items-center gap-4">
        {SocialMediaData?.facebook_id && (
          <a
            href={`https://www.facebook.com/${SocialMediaData?.facebook_id}`}
            target="_blank"
          >
            <img src={Facebook} alt="facebook" />
          </a>
        )}
        {SocialMediaData?.twitter_id && (
          <a
            href={`https://twitter.com/${SocialMediaData?.twitter_id}`}
            target="_blank"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        )}
        {SocialMediaData?.instagram_id && (
          <a
            href={`https://instagram.com/${SocialMediaData?.instagram_id}`}
            target="_blank"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        )}
        {DetailsData?.homepage && (
          <>
            <div className="h-[25px] w-[1px] bg-gray-400"></div>
            <a href={`${DetailsData?.homepage}`} target="_blank">
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
  );
};

export default Facts;
