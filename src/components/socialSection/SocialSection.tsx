import { useState } from "react";
import { useParams } from "react-router-dom";
import { useReviews } from "../../utils/customHooks";
import StarIcon from "../../assets/icons/star.svg";
import NoImage from "../../assets/images/noImage.svg";
import { formatDate } from "../../utils/helperFunctions";
import { truncateReviewContent } from "./TruncateReview";

const SocialSection = ({ platform }: { platform: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams<{ id: string }>();

  const { data: ReviewsData } = useReviews(Number(id), platform);

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex items-start justify-start gap-10">
        <p className="text-2xl font-bold">Social</p>
        <div role="tablist" className="tabs tabs-bordered relative">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-lg font-bold"
            aria-label="Reviews"
            onClick={() => setActiveTab(0)}
            checked={activeTab === 0}
          />
          <div
            role="tabpanel"
            className="tab-content relative left-[-5rem] top-1 h-fit w-[300px]  md:h-fit   md:w-[120%] lg:w-[700px] xl:w-[980px]"
          >
            {ReviewsData?.results?.length > 0 ? (
              <div className="flex flex-col gap-3">
                <div className="flex h-fit w-full flex-col gap-3 rounded-lg  p-4 shadow-lg">
                  <div className="flex gap-3">
                    {ReviewsData?.results?.[0]?.author_details?.avatar_path ? (
                      <img
                        src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${ReviewsData?.results?.[0]?.author_details?.avatar_path}`}
                        alt="avatar"
                        loading="lazy"
                        className="h-[45px] w-[45px] rounded-full"
                      />
                    ) : (
                      <img
                        src={NoImage}
                        alt="No Image"
                        loading="lazy"
                        className="h-[45px] w-[45px] rounded-full"
                      />
                    )}
                    <div className="flex flex-col gap-0">
                      <h3 className="text-xl font-bold">
                        A review by {ReviewsData?.results?.[0]?.author}
                      </h3>
                      <div className="flex w-fit items-center gap-3   text-black ">
                        <div className="flex h-4 items-center justify-center gap-1 rounded-full bg-black px-1 py-[1px] text-white">
                          <img
                            src={StarIcon}
                            alt="Star icon"
                            className="h-3 w-3 "
                            loading="lazy"
                          />
                          <p className="text-sm">
                            {ReviewsData?.results?.[0]?.author_details?.rating}
                          </p>
                        </div>
                        <p className="text-sm">
                          Written by {ReviewsData?.results?.[0]?.author} on{" "}
                          {formatDate(ReviewsData?.results?.[0]?.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-md">
                      {truncateReviewContent(
                        ReviewsData?.results?.[0]?.content,
                      )}
                    </p>
                  </div>
                </div>
                <p className="cursor-pointer text-lg font-bold hover:opacity-50">
                  See all Reviews
                </p>
              </div>
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
            className="tab text-lg font-bold"
            aria-label="Discussions"
            onClick={() => setActiveTab(1)}
            checked={activeTab === 1}
          />
          <div
            role="tabpanel"
            className="tab-content relative left-[-5rem] top-1 h-[150px] w-[300px]  md:h-[150px]   md:w-[120%] lg:w-[700px] xl:w-[980px]"
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
