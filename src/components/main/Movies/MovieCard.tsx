import { formattedReleaseDate } from "../../../utils/helperFunctions";

type MovieCardProps = {
  poster_path: string;
  title: string;
  release_date: string;
};

const MovieCard = ({ poster_path, title, release_date }: MovieCardProps) => {
  return (
    <div className="flex  flex-col gap-2 ">
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt={title}
        loading="lazy"
        className="h-[225px] min-w-[150px] rounded-lg object-cover shadow-sm"
      />
      <div className="flex flex-col pl-3">
        <h3 className="font-bold">{title}</h3>
        <p className="font-normal">{formattedReleaseDate(release_date)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
