import {
  formattedReleaseDate,
  getBorderColor,
} from "../../../utils/helperFunctions";
import { MovieList } from "./MovieList";

const MovieCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
}: MovieList) => {
  const rating = Math.floor(vote_average * 10);

  const borderColor = getBorderColor(rating);

  return (
    <div className="relative flex cursor-pointer flex-col gap-2">
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt={title}
        loading="lazy"
        className="h-[225px] min-w-[150px] rounded-lg object-cover shadow-sm"
      />
      <div
        className={`${borderColor} radial-progress absolute left-3 top-[13em] border border-solid border-[rgb(3,37,65)] bg-[rgb(3,37,65)]`}
        style={
          {
            "--value": rating,
            "--size": "2.3rem",
            "--thickness": "3px",
          } as React.CSSProperties
        }
        role="progressbar"
      >
        {rating > 0 ? (
          <span className="text-white">
            {rating}
            <sup className="text-[7px]">%</sup>
          </span>
        ) : (
          <span className="text-white">NR</span>
        )}
      </div>
      <div className="flex flex-col pl-3 pt-4">
        <h3 className="font-bold">{title}</h3>
        <p className="font-normal">{formattedReleaseDate(release_date)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
