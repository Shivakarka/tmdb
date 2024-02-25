import { formatDate } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { NoImage } from "../../utils/svgs";

const SearchMediaCard = ({ item }: { item: any }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item?.title) {
      navigate(`/movie/${item?.id}`);
    } else {
      navigate(`/tv/${item?.id}`);
    }
  };

  return (
    <div
      className="flex h-[191px] w-full flex-col gap-4 overflow-x-auto overflow-y-hidden rounded-lg border shadow-lg md:h-fit md:w-[55vw] lg:w-full"
      key={item?.id}
    >
      <div className="flex">
        {item?.poster_path ? (
          <img
            src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2/${item?.poster_path}`}
            alt="Poster"
            loading="lazy"
            className="h-[141px] min-w-[94px] cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <img
            src={NoImage}
            alt={"No poster"}
            className="h-[141px] w-[94px] p-4"
          />
        )}
        <div className="flex flex-col gap-2 border-l-[1px] p-3">
          <div>
            <p
              className="cursor-pointer text-lg font-semibold hover:opacity-60"
              onClick={handleClick}
            >
              {item?.title || item?.name}
            </p>
            <p className="text-md text-gray-500">
              {item?.release_date && formatDate(item?.release_date)}
              {item?.first_air_date && formatDate(item?.first_air_date)}
            </p>
          </div>
          <p>
            {item?.overview.length > 250
              ? item?.overview.substring(0, 250) + "..."
              : item?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchMediaCard;
