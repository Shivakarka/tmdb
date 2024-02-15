import { getBorderColor } from "../../../utils/helperFunctions";

const RatingsBar = ({ rating }: { rating: number }) => {
  const borderColor = getBorderColor(rating);
  return (
    <div
      className={`${borderColor} border-tmdbDarkBlue bg-tmdbDarkBlue radial-progress absolute left-3 top-[13em] border border-solid`}
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
  );
};

export default RatingsBar;
