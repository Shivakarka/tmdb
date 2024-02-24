import { getBorderColor } from "../../../utils/helperFunctions";

type RatingsBarProps = {
  rating: number;
  size: string;
  thickness: string;
  location: string;
  percentSize?: string;
  fontSize?: string;
};

const RatingsBar = ({
  rating,
  size,
  thickness,
  location,
  percentSize = "text-[7px]",
  fontSize = "text-[14px]",
}: RatingsBarProps) => {
  const borderColor = getBorderColor(rating);
  return (
    <div
      className={`${borderColor} radial-progress ${location === "movieCard" && "absolute left-3 top-[13em]"}  border border-solid border-tmdbDarkBlue bg-tmdbDarkBlue`}
      style={
        {
          "--value": rating,
          "--size": size,
          "--thickness": thickness,
        } as React.CSSProperties
      }
    >
      {rating > 0 ? (
        <span className={`${fontSize} text-white`}>
          {rating}
          <sup className={`${percentSize}`}>%</sup>
        </span>
      ) : (
        <span className="text-white">NR</span>
      )}
    </div>
  );
};

export default RatingsBar;
