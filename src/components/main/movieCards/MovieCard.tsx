import { formattedReleaseDate } from "../../../utils/helperFunctions.ts";
import { MovieList } from "./MovieList.tsx";
import RatingsBar from "../RatingsBar/RatingsBar.tsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
  name,
  first_air_date,
  id,
}: MovieList) => {
  const [platform, setPlatform] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setPlatform("tv");
    } else {
      setPlatform("movie");
    }
  }, []);

  const handleClick = () => {
    if (platform === "tv") {
      navigate(`/tv/${id}`);
    } else {
      navigate(`/movie/${id}`);
    }
  };

  const rating = Math.floor(vote_average * 10);

  return (
    <div className="relative flex flex-col gap-2">
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt={title || name}
        loading="lazy"
        className="h-[225px] min-w-[150px] cursor-pointer rounded-lg object-cover shadow-sm"
        onClick={handleClick}
      />
      <div className="absolute right-2 top-4 h-[20px] w-[20px] cursor-pointer rounded-[50%] bg-gray-300 bg-opacity-70 hover:bg-[rgb(1,180,229)]">
        <div className=" flex h-full w-full flex-col items-center justify-end pb-[1px] font-bold text-gray-500 ">
          ...
        </div>
      </div>
      <RatingsBar
        rating={rating}
        size="2.3rem"
        thickness="3px"
        location="movieCard"
      />
      <div className="flex flex-col pl-3 pt-5">
        {title && (
          <p
            className="cursor-pointer font-bold hover:text-tmdbLightBlue"
            onClick={handleClick}
          >
            {title}
          </p>
        )}
        {release_date && (
          <p className="font-normal">{formattedReleaseDate(release_date)}</p>
        )}
        {name && (
          <p
            className="cursor-pointer font-bold hover:text-tmdbLightBlue"
            onClick={handleClick}
          >
            {name}
          </p>
        )}
        {first_air_date && (
          <p className="font-normal">{formattedReleaseDate(first_air_date)}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
