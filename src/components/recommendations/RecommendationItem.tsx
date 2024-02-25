import { useNavigate } from "react-router-dom";
import HoverOptions from "./HoverOptions.tsx";

type RecommendationItemProps = {
  item: any;
  index: number;
  hoveredIndex: number;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number>>;
};

const RecommendationItem = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: RecommendationItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item?.media_type === "tv") {
      navigate(`/tv/${item?.id}`);
    } else {
      navigate(`/movie/${item?.id}`);
    }
  };

  return (
    <div className="flex h-[180px] min-w-[250px] flex-col gap-2" key={item?.id}>
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(-1)}
        onClick={handleClick}
      >
        <img
          src={`https://media.themoviedb.org/t/p/w250_and_h141_face/${item?.backdrop_path}`}
          alt={"poster"}
          loading="lazy"
          className="rounded-lg"
        />
        {hoveredIndex === index && <HoverOptions item={item} />}
      </div>
      <div className="flex justify-between">
        <h3
          className="text-md cursor-pointer overflow-hidden font-semibold"
          onClick={handleClick}
        >
          {item?.name?.length > 30
            ? item?.name.slice(0, 28) + "..."
            : item?.name}
          {item?.title?.length > 30
            ? item?.title.slice(0, 28) + "..."
            : item?.title}
        </h3>
        <p className="text-sm font-semibold">
          {Math.floor(item?.vote_average * 10)}%
        </p>
      </div>
    </div>
  );
};

export default RecommendationItem;
