const truncateReviewContent = (content: string) => {
  if (!content) return;
  const words = content.split(" ");
  const truncatedContent = words.slice(0, 100).join(" ");
  if (words.length > 100) {
    return (
      <>
        {truncatedContent}...
        <span className=" cursor-pointer underline hover:opacity-50">
          {" "}
          read the rest
        </span>
      </>
    );
  }
  return truncatedContent;
};

export { truncateReviewContent };
