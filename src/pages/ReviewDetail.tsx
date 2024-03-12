import { useParams } from "react-router-dom";
import { useReview } from "../utils/customHooks";
import LoadingSpinner from "../components/loader/LoadingSpinner";
import { formattedReleaseDate } from "../utils/helperFunctions";
import { useEffect } from "react";
import ErrorMessage from "../components/error/ErrorMessage";

const ReviewDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: Review, isLoading: ReviewLoading, error } = useReview(id ?? "");

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      {ReviewLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="mx-auto flex min-h-[60vh] w-full flex-col gap-1 p-5 xl:w-[1300px]">
          <h1 className="text-2xl font-semibold">{Review?.media_title}</h1>
          <p className="text-lg">
            Written by{" "}
            <span className="font-semibold text-[#426800]">
              {Review?.author}
            </span>{" "}
            on {formattedReleaseDate(Review?.created_at)}
          </p>
          <div className="mt-6">
            {Review?.content.split("\n").map((para: string, index: number) => (
              <p className="mb-5" key={index}>
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewDetail;
