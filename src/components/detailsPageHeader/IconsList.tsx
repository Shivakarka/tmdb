import {
  AddToListIcon,
  HeartIcon,
  StarIcon,
  WatchListIcon,
} from "../../utils/svgs";

const IconsList = () => {
  return (
    <div className="hidden cursor-pointer gap-5 md:flex">
      <div
        className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 
        hover:tooltip hover:tooltip-bottom hover:tooltip-open"
        data-tip="Add to List"
      >
        <img src={AddToListIcon} alt="AddToList Icon" />
      </div>
      <div
        className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 
        hover:tooltip hover:tooltip-bottom hover:tooltip-open"
        data-tip="Mark as favorite"
      >
        <img src={HeartIcon} alt="Heart Icon" />
      </div>
      <div
        className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 
        hover:tooltip hover:tooltip-bottom hover:tooltip-open"
        data-tip="Add to your watchlist"
      >
        <img src={WatchListIcon} alt="WatchList Icon" />
      </div>
      <div
        className="h-[46px] w-[46px] rounded-full bg-tmdbDarkBlue p-3.5 
        hover:tooltip hover:tooltip-bottom hover:tooltip-open"
        data-tip="Rate it!"
      >
        <img src={StarIcon} alt="Star Icon" />
      </div>
    </div>
  );
};

export default IconsList;
