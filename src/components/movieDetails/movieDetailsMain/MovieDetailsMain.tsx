import Facebook from "../../../assets/icons/facebook.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import HomePage from "../../../assets/icons/homePage.svg";
import Keyboard from "../../../assets/icons/keyboard.svg";
import Report from "../../../assets/icons/report.svg";
import Contributers from "../../contributers/Contributers";
import { Graph } from "../../../utils/svgs.tsx";

const MovieDetailsMain = () => {
  const keywords = [
    {
      id: 1,
      name: "new york city",
    },
    {
      id: 2,
      name: "new york city",
    },
    {
      id: 3,
      name: "new york city",
    },
    {
      id: 4,
      name: "new york city",
    },
  ];

  return (
    <main className="mx-auto grid h-fit grid-cols-1 px-[30px] py-[40px] md:min-h-[1500px] md:grid-cols-[60%,40%] lg:grid-cols-[3.8fr,1fr] xl:w-[1400px]">
      <section className="bg-red-200"></section>
      <div className="flex flex-col gap-8 bg-white px-[20px] py-[30px]">
        <section className="flex flex-col gap-8" title="facts">
          <div className="flex items-center gap-4">
            <a href="">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="">
              <img src={Instagram} alt="instagram" />
            </a>
            <div className="h-[25px] w-[1px] bg-gray-400"></div>
            <a href="">
              <img src={HomePage} alt="homepage" />
            </a>
          </div>
          <div className="leading-5">
            <p>
              <strong>Status</strong>
            </p>
            <p>Released</p>
          </div>
          <div className="leading-5">
            <p>
              <strong>Original Language</strong>
            </p>
            <p>English</p>
          </div>
          <div className="leading-5">
            <p>
              <strong>Budget</strong>
            </p>
            <p>$80,000,000.00</p>
          </div>
          <div className="leading-5">
            <p>
              <strong>Revenue</strong>
            </p>
            <p>$51,504,619.00</p>
          </div>
        </section>
        <section title="keywords">
          <p>
            <strong>Keywords</strong>
          </p>
          <ul className=" flex cursor-pointer flex-wrap gap-2 whitespace-nowrap">
            {keywords.map((keyword) => (
              <li
                key={keyword.id}
                className="rounded-md bg-gray-200 px-2 py-1 text-sm"
              >
                {keyword.name}
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section title="content_score">
          <h4>
            <strong>Content</strong>
          </h4>
          <div className=" rounded-lg bg-gray-200">
            <div className="w-full  ">
              <div className="rounded-tl-lg rounded-tr-lg bg-black px-2 text-[16px] font-bold text-white">
                100
              </div>
            </div>
            <p className="px-2 py-1 text-[14px]">Yes! Looking good!</p>
          </div>
        </section>
        <section className="flex flex-col gap-4" title="leaderboard">
          <h4>
            <strong>Top Contributers</strong>
          </h4>
          <Contributers />
        </section>
        <section title="Popularity">
          <h4 className="text-lg">
            <strong>Popularity Trend</strong>
          </h4>
          <div className="mt-4 h-12">
            <Graph />
          </div>
        </section>
        <div className="text-md w-fit cursor-pointer rounded-full bg-black px-[20px] py-[6px] font-bold text-white">
          <p>EDIT PAGE</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 opacity-60">
          <img src={Keyboard} alt="keyboard icon" width={20} height={20} />
          <p>Keyboard Shortcuts</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 opacity-60">
          <img src={Report} alt="Report icon" width={20} height={20} />
          <p>Report an issue</p>
        </div>
      </div>
    </main>
  );
};

export default MovieDetailsMain;
