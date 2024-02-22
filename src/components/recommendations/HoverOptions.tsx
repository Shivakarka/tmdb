import Calender from "../../assets/icons/calender.svg";
import HeartIcon from "../../assets/icons/heartIcon.svg";
import BookmarkIcon from "../../assets/icons/watchList.svg";
import StarIcon from "../../assets/icons/star.svg";

const HoverOptions = ({ item }: { item: any }) => {
  return (
    <div className="absolute bottom-0 z-[1000] flex w-full items-center justify-between gap-2 bg-gray-200 bg-opacity-90 px-2 py-1">
      <div className="flex items-center gap-1">
        <img src={Calender} alt="Calender icon" className="h-4 w-4" />
        <p className="text-md font-semibold">
          {item?.release_date || item?.first_air_date}
        </p>
      </div>
      <div className="flex gap-2 invert">
        <img src={HeartIcon} alt="Calender icon" className="h-4 w-4" />
        <img src={BookmarkIcon} alt="Calender icon" className="h-4 w-4" />
        <img src={StarIcon} alt="Calender icon" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default HoverOptions;
