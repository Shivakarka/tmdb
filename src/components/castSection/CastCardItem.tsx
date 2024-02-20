import { CastType } from "./CastCards";
import NoImage from "../../assets/images/noImage.svg";

type CastCardItemProps = {
  cast: CastType;
  platform: string;
};

const CastCardItem = ({ cast, platform }: CastCardItemProps) => {
  return (
    <div
      key={cast.id}
      className="flex min-h-[271px] min-w-[140px] flex-col gap-2 rounded-md shadow-md"
    >
      {cast.profile_path ? (
        <img
          src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
          alt={cast.name}
          className="cursor-pointer rounded-t-md"
          loading="lazy"
        />
      ) : (
        <div className="h-[175px] w-[138px] rounded-t-md bg-gray-300">
          <img src={NoImage} alt="No image" loading="lazy" />
        </div>
      )}
      <div className="px-2 py-1">
        <h3 className="cursor-pointer font-bold hover:opacity-50">
          {cast.name}
        </h3>
        <p className="text-sm">
          {platform === "tv" && `${cast?.roles?.[0].character}`}
        </p>
        <p>{cast.character}</p>
        {platform === "tv" && (
          <p className="text-sm text-gray-500">{`${cast.total_episode_count} Episodes`}</p>
        )}
      </div>
    </div>
  );
};

export default CastCardItem;
