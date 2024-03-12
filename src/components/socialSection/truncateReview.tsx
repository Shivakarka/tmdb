import { Link } from "react-router-dom";

const truncateReviewContent = (content: string,id:string) => {
  if (!content) return;
  const words = content.split(" ");
  const truncatedContent = words.slice(0, 100).join(" ");
  if (words.length > 100) {
    return (
      <>
        {truncatedContent}...
        <Link to={`/review/${id}`}>
        <span className=" cursor-pointer underline hover:opacity-50">
          {" "}
          read the rest
        </span>
        </Link>
      </>
    );
  }
  return truncatedContent;
};

export { truncateReviewContent };
