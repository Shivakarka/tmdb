import { useState } from "react";
import { useParams } from "react-router-dom";
import { useReviews } from "../../utils/customHooks.ts";
import ReviewCard from "./ReviewCard.tsx";
import LoadingSpinner from "../loader/LoadingSpinner.tsx";
import ErrorMessage from "../error/ErrorMessage.tsx";

const SocialSection = ({ platform }: { platform: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams<{ id: string }>();

  const {
    data: ReviewsData,
    isLoading,
    error,
  } = useReviews(Number(id), platform);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex items-start justify-start gap-5 md:gap-10">
        <p className="text-2xl font-semibold">Social</p>
        <div role="tablist" className="tabs tabs-bordered relative">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-lg font-semibold"
            aria-label="Reviews"
            onClick={() => setActiveTab(0)}
            checked={activeTab === 0}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative left-[-5rem] top-1 mt-1 h-fit w-[85vw] min-w-[320px] sm:w-[88vw] 
            md:left-[-6.5rem] md:h-fit md:w-[55vw] md:min-w-[400px] lg:w-[74vw] xl:w-[1050px]"
          >
            {ReviewsData?.results?.length > 0 ? (
              <ReviewCard
                avatar_path={
                  ReviewsData?.results?.[0]?.author_details?.avatar_path
                }
                author={ReviewsData?.results?.[0]?.author}
                rating={ReviewsData?.results?.[0]?.author_details?.rating}
                created_at={ReviewsData?.results?.[0]?.created_at}
                content={ReviewsData?.results?.[0]?.content}
              />
            ) : (
              <div className="flex flex-col gap-4 p-3">
                <p>
                  We don't have any reviews for this. Would you like to{" "}
                  <span className="cursor-pointer hover:opacity-50">
                    write one?
                  </span>
                </p>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-lg font-semibold"
            aria-label="Discussions"
            onClick={() => setActiveTab(1)}
            checked={activeTab === 1}
            readOnly
          />
          <div
            role="tabpanel"
            className="tab-content relative left-[-5rem] top-1 h-[150px] w-[300px] 
            md:h-[150px] md:w-[120%] lg:w-[700px] xl:w-[980px]"
          >
            <div className="flex flex-col gap-4 p-3">
              <p>
                Want to be notified when someone makes the first post?{" "}
                <span className="cursor-pointer hover:opacity-50">
                  Yes, notify me!
                </span>
              </p>
              <h3 className="cursor-pointer text-lg font-bold hover:opacity-50">
                Go to Discussions
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
