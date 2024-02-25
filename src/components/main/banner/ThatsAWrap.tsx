import ThatsAWrapImg from "../../../assets/images/ThatsAWrap.webp";
import { RightArrow } from "../../../utils/svgs";

const ThatsAWrap = () => {
  return (
    <div
      className="h mx-auto flex h-[300px] items-center justify-start bg-cover bg-center text-white md:h-[330px] md:w-full lg:h-[360px] lg:w-[1000px] xl:w-[1300px]"
      style={{ backgroundImage: `url(${ThatsAWrapImg})`, opacity: 1 }}
    >
      <div className="h-full w-full bg-black/70">
        <div className="ms-1 mt-0 flex flex-col gap-4 px-[30px] py-[40px] md:mt-4 lg:mt-6 lg:px-[40px]">
          <div
            className="font-bold leading-[3rem] lg:leading-[4rem]  "
            style={{ fontFamily: "Inter" }}
          >
            <h2 className=" bg-gradient-to-br from-green-300 to-blue-700 bg-clip-text text-[40px] text-transparent md:text-[50px] lg:text-6xl">
              That's a<br />
            </h2>
            <h2 className=" mt-1 bg-gradient-to-br from-green-200 to-blue-700 bg-clip-text text-[40px] text-transparent md:text-[50px] lg:mt-2 lg:text-6xl">
              Wrap 2023
            </h2>
          </div>
          <p className="text-[20px]">
            The best (and worst) of the year from TMDB.
          </p>
          <button className="flex w-[150px] items-center justify-center gap-2 rounded-full border-2 px-[12px] py-[6px] ">
            <h2 className="font-semibold">Check it out </h2>
            <img src={RightArrow} width={20} height={20} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThatsAWrap;
