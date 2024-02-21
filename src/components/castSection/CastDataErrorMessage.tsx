const CastDataErrorMessage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 text-3xl md:h-[510px]">
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

export default CastDataErrorMessage;