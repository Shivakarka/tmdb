import WelcomeImg from "../../assets/images/welcome.jpg";

const Welcome = () => {
  return (
    <div
      className="relative mx-auto flex h-[300px] w-full flex-col items-start justify-center gap-1 overflow-hidden bg-opacity-50 bg-cover
       bg-center p-8 text-white md:w-full lg:h-[360px]  lg:w-[1300px]
     lg:gap-6 lg:p-10
    "
      style={{ backgroundImage: `url(${WelcomeImg})` }}
    >
      <div className="flex flex-col lg:pb-2 ">
        <h2 className="text-[48px] font-bold lg:pb-2">Welcome.</h2>
        <h3 className=" relative bottom-3 text-[30px] font-semibold leading-10 lg:bottom-5  lg:text-[32px]">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <form className=" flex w-full justify-between rounded-full bg-white lg:mb-2">
        <input
          className="w-[80%] rounded-full  p-3 ps-5 text-gray-500 placeholder:text-[18px] placeholder:text-gray-500 focus:outline-none lg:p-[11px] lg:pl-[21px]"
          type="text"
          placeholder={
            window.innerWidth < 768
              ? "Search..."
              : "Search for a movie, tv show, person..."
          }
        />
        <button className="w-[100px] rounded-full bg-gradient-to-r  from-[rgb(30,213,169)]  to-[rgb(1,180,228)] p-2 font-semibold text-white hover:text-black">
          Search
        </button>
      </form>
    </div>
  );
};

export default Welcome;
