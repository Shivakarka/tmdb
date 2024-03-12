import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helperFunctions.ts";
import { NoImage, StarIcon } from "../../utils/svgs";
import { truncateReviewContent } from "./truncateReview.tsx";

type ReviewCardProps = {
  id: string;
  avatar_path: string;
  author: string;
  rating: number;
  created_at: string;
  content: string;
};

const ReviewCard = ({
  id,
  avatar_path,
  author,
  rating,
  created_at,
  content,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-fit w-[78vw] flex-col gap-3 rounded-lg p-4 shadow-lg sm:w-full">
        <div className="flex gap-3">
          <Link to={`/review/${id}`}>
            {avatar_path ? (
              <img
                src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${avatar_path}`}
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
          </Link>
          <div className="flex flex-col gap-0">
            <Link to={`/review/${id}`}>
              <h3 className="text-xl font-bold">A review by {author}</h3>
            </Link>
            <div className="flex w-fit items-center gap-3 text-black ">
              <div className="flex h-4 items-center justify-center gap-1 rounded-full bg-black px-1 py-[1px] text-white">
                <img
                  src={StarIcon}
                  alt="Star icon"
                  className="h-3 w-3 "
                  loading="lazy"
                />
                <p className="text-sm">{rating || 0}</p>
              </div>
              <p className="text-sm">
                Written by {author} on {formatDate(created_at)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-md">{truncateReviewContent(content, id)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
