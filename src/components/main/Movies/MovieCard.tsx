import { formattedReleaseDate } from "../../../utils/helperFunctions.ts";
import { MovieList } from "./MovieList.tsx";
import RatingsBar from "./RatingsBar.tsx";

const MovieCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
  original_name,
  first_air_date,
}: MovieList) => {
  const rating = Math.floor(vote_average * 10);

  return (
    <div className="relative flex cursor-pointer flex-col gap-2">
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt={title}
        loading="lazy"
        className="h-[225px] min-w-[150px] rounded-lg object-cover shadow-sm"
      />
      <div className="absolute right-2 top-4 h-[20px] w-[20px] rounded-[50%] bg-gray-300 bg-opacity-70 hover:bg-[rgb(1,180,229)]">
        <div className=" flex h-full w-full flex-col items-center justify-end pb-[1px] font-bold text-gray-500 ">
          ...
        </div>
      </div>
      <RatingsBar rating={rating} />
      <div className="flex flex-col pl-3 pt-4">
        {title && <p className="font-bold">{title}</p>}
        {release_date && (
          <p className="font-normal">{formattedReleaseDate(release_date)}</p>
        )}
        {original_name && <p className="font-bold">{original_name}</p>}
        {first_air_date && (
          <p className="font-normal">{formattedReleaseDate(first_air_date)}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
