type ErrorMessageProps = {
  location?: string;
};

const ErrorMessage = ({ location }: ErrorMessageProps) => {
  return (
    <div
      className={`flex h-[250px] w-full flex-col items-center justify-center gap-6 text-xl md:h-[510px] md:text-3xl ${location && "text-white"}`}
    >
      <p>Something went wrong. Please try again later.</p>
      <button
        className="btn btn-primary text-lg"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorMessage;
