import { useDetails, useExternalIds } from "../../utils/customHooks.ts";
import { formatNumberWithCommas } from "../../utils/helperFunctions.ts";
import ErrorMessage from "../error/ErrorMessage.tsx";
import LoadingSpinner from "../loader/LoadingSpinner.tsx";
import SocialMediaIcons from "./SocialMediaIcons.tsx";

const Facts = ({
  id,
  platform,
}: {
  id: string | undefined;
  platform: string;
}) => {
  const { data: DetailsData, isLoading: DetailsDataLoading, error } = useDetails(
    Number(id),
    platform,
  );

  const { data: SocialMediaData, isLoading: SocialMediaDataLoading } =
    useExternalIds(Number(id), platform);

  if (DetailsDataLoading || SocialMediaDataLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <section className="flex flex-col gap-8" title="facts">
      <SocialMediaIcons {...SocialMediaData} {...DetailsData}  />
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
