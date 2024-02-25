import NoImage from "../assets/images/noImage.svg";
import AddToListIcon from "../assets/icons/AddToList.svg";
import WatchListIcon from "../assets/icons/watchList.svg";
import HeartIcon from "../assets/icons/heartIcon.svg";
import StarIcon from "../assets/icons/Star.svg";
import Calender from "../assets/icons/calender.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/instagram.svg";
import HomePage from "../assets/icons/homePage.svg";
import Keyboard from "../assets/icons/keyboard.svg";
import ReportIcon from "../assets/icons/report.svg";
import BookmarkIcon from "../assets/icons/watchList.svg";
import Logo1 from "../assets/images/logo1.svg";
import Logo2 from "../assets/images/logo2.svg";
import PlusIcon from "../assets/icons/plus-icon.svg";
import SearchIcon from "../assets/icons/search-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import MovieBg from "../assets/images/movieCardBg.svg";
import RightArrow from "../assets/icons/right-arrow.svg";
import CrossIcon from "../assets/icons/cross.svg";
import TickIcon from "../assets/icons/tickIcon.svg";
import LockIcon from "../assets/icons/lockIcon.svg";
import LikeIcon from "../assets/icons/likeIcon.svg";
import DislikeIcon from "../assets/icons/dislikeIcon.svg";
import ExpandIcon from "../assets/icons/expandIcon.svg";

const Graph = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs></defs>
      <g>
        <path d="M0 0 L 203 0 203 50 0 50Z" stroke="none" fill="none"></path>
        <path
          d="M2 3 L 200 3 200 48 2 48Z"
          stroke="none"
          fill="#fff"
          fillOpacity="0"
        ></path>
        <g>
          <g></g>
          <g></g>
          <g>
            <path
              className="hidden"
              d="M2 3 L 2 48"
              stroke="#8e8e8e"
              strokeWidth="2"
              fill="none"
            ></path>
          </g>
          <g></g>
          <g>
            <g>
              <path
                d="M16.143 44.143 L 44.429 30 72.714 14.571 101 8.143 129.286 8.143 157.571 12 185.857 9.429"
                stroke="#200b0b"
                strokeWidth="2"
                fill="none"
              ></path>
            </g>
          </g>
        </g>
        <g></g>
      </g>
    </svg>
  );
};

export {
  Graph,
  NoImage,
  AddToListIcon,
  WatchListIcon,
  HeartIcon,
  StarIcon,
  Calender,
  Facebook,
  Twitter,
  Instagram,
  HomePage,
  Keyboard,
  ReportIcon,
  BookmarkIcon,
  Logo1,
  Logo2,
  PlusIcon,
  SearchIcon,
  PlayIcon,
  MovieBg,
  RightArrow,
  CrossIcon,
  TickIcon,
  LockIcon,
  LikeIcon,
  DislikeIcon,
  ExpandIcon,
};
