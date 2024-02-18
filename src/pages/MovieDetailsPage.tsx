import RatingsBar from "../components/main/RatingsBar/RatingsBar";
import AddToListIcon from "../assets/icons/AddToList.svg";
import WatchListIcon from "../assets/icons/watchList.svg";
import HeartIcon from "../assets/icons/heartIcon.svg";
import StarIcon from "../assets/icons/Star.svg";
import PlayIcon from "../assets/icons/play-icon.svg";

const MovieDetailsPage = () => {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ];

  const genreNames = genres.map((genre) => genre.name).join(", ");

  return (
    <div>
      <div
        className={
          "relative grid w-full grid-cols-1 grid-rows-[20%,80%] content-center overflow-hidden bg-[rgb(32,11,11)] md:h-[510px] md:grid-cols-[30%,70%] md:grid-rows-1"
        }
      >
        <div
          className={
            "absolute inset-0 bg-cover bg-[top_left] bg-no-repeat opacity-50 md:bg-[url('https://image.tmdb.org/t/p/w500/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg')]"
          }
        ></div>
        <div
          className={
            "relative flex h-[180px] w-full gap-2 bg-[url('https://image.tmdb.org/t/p/w500/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg')] md:mt-[5em] md:block md:h-full md:w-full md:bg-none lg:mt-8"
          }
        >
          <img
            src={
              "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg"
            }
            alt={"poster"}
            className={
              "ml-2 mt-1 h-fit w-[100px] md:ml-auto md:mt-0 md:h-fit md:w-fit md:pl-0 "
            }
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div
          className={
            "relative mt-5 flex w-full flex-col items-center px-6 py-10 text-white md:items-start "
          }
        >
          <h1 className={"text-2xl font-bold md:text-4xl"}>
            Madam Web{" "}
            <span className={"font-normal text-gray-200"}>(2024)</span>
          </h1>
          <div className={"flex flex-wrap justify-center"}>
            <p className={"text-md me-8 font-normal"}>02/16/2024 (IN)</p>
            <ul
              className={
                "order-3 me-8 inline-flex text-center md:order-2 md:list-disc"
              }
            >
              <li>{genreNames}</li>
            </ul>
            <ul className={"order-2 me-8 inline-flex list-disc md:order-3"}>
              <li>1hr 56m</li>
            </ul>
          </div>
          <div className="mt-2 flex items-center gap-5 py-2">
            <div className="flex items-center gap-3 font-bold">
              <div className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                <RatingsBar
                  rating={80}
                  size={"3.7rem"}
                  thickness={"5px"}
                  location="movieDetail"
                  percentSize="text-[11px]"
                  fontSize="text-[24px]"
                />
              </div>
              <h2>
                User <br /> Score
              </h2>
            </div>
            <div className="hidden cursor-pointer gap-5 md:flex">
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Add to List"
              >
                <img src={AddToListIcon} alt="AddToList Icon" />
              </div>
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Mark as favorite"
              >
                <img src={HeartIcon} alt="Heart Icon" />
              </div>
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Add to your watchlist"
              >
                <img src={WatchListIcon} alt="WatchList Icon" />
              </div>
              <div
                className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 hover:tooltip hover:tooltip-bottom hover:tooltip-open"
                data-tip="Rate it!"
              >
                <img src={StarIcon} alt="Star Icon" />
              </div>
            </div>
            <div className="h-9 w-[2px] bg-gray-600 md:hidden"></div>
            <div className="flex cursor-pointer items-center gap-2 transition-all duration-300 ease-in-out hover:opacity-60">
              <div className="h-5 w-5 invert">
                <img src={PlayIcon} alt="Play Icon" />
              </div>
              <div className="text-md font-bold">Play Trailer</div>
            </div>
          </div>
          <p className={"self-start py-2 text-lg italic text-gray-200"}>
            Her web connects them all.
          </p>
          <p className={"self-start text-xl font-bold"}>Overview</p>
          <p className={"w-[95%] self-start pt-1 text-lg"}>
            Forced to confront revelations about her past, paramedic Cassandra
            Webb forges a relationship with three young women destined for
            powerful futures...if they can all survive a deadly present.
          </p>
          <div
            className={
              "mt-4 grid w-full grid-cols-[1fr,1fr] gap-5 md:grid-cols-[1fr,1fr,1fr]"
            }
          >
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
            <div>
              <p className={"text-lg font-bold"}>S.J. Clarkson</p>
              <p>Director, Screenplay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
