import { NoImage } from "../../utils/svgs";

const LoadingShimmer = () => {
  return (
    <div className="relative">
      <div
        className={`flex w-full animate-pulse gap-3 overflow-x-auto pt-5 lg:w-[1260px]`}
      >
        {Array.from({ length: 10 })
          .fill(0)
          .map((_, i) => (
            <div key={i} className=" flex h-[320px] w-full  ">
              <div className="relative flex cursor-pointer flex-col gap-3">
                <div
                  className=" h-[225px] w-[150px] rounded-lg border-2 border-gray-200 bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${NoImage})`,
                    backgroundColor: "#f5f5f5",
                    backgroundSize: "100% 40%",
                  }}
                ></div>

                <div className="h-8 rounded-lg bg-gray-200"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LoadingShimmer;
