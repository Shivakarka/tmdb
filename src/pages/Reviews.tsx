import { useParams } from "react-router-dom";
import { useReviews } from "../utils/customHooks";
import ReviewCard from "../components/socialSection/ReviewCard";
import LoadingSpinner from "../components/loader/LoadingSpinner";
import ErrorMessage from "../components/error/ErrorMessage";

const Reviews = () => {
  const { mediaPlatform, id } = useParams();

  const {
    data: Reviews,
    isLoading: ReviewsLoading,
    error,
  } = useReviews(Number(id), mediaPlatform ?? "");

  if (ReviewsLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="mx-auto my-5 flex min-h-[60vh] flex-col gap-5 p-3 lg:w-[60%]">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {Reviews?.results?.length > 0 ? (
        Reviews?.results?.map((review: any, index: number) => (
          <ReviewCard key={index} {...review} />
        ))
      ) : (
        <div className="flex flex-col gap-4 p-3">
          <p>
            We don't have any reviews for this. Would you like to{" "}
            <span className="cursor-pointer hover:opacity-50">write one?</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
