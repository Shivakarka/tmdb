import { Logo1, Logo2, PlusIcon, SearchIcon } from "../../utils/svgs";
import Dropdown from "./dropdown/Dropdown";
import { Link } from "react-router-dom";

const NavBarItems = () => {
  return (
    <div className="drawer-content flex flex-col bg-tmdbDarkBlue">
      {/* Navbar */}
      <div
        className="max-w-screen navbar z-40 mx-auto flex w-full justify-center bg-tmdbDarkBlue 
      p-0 text-white lg:px-5 xl:w-[1300px]"
      >
        <div className="flex-none lg:hidden ">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className=" flex-1 bg-tmdbDarkBlue md:ms-[40vw] lg:mx-2 lg:px-2">
          <Link to={"/"} aria-label="TMDB Home">
            <img
              src={Logo1}
              alt="logo"
              width={154}
              height={20}
              className="hidden lg:block"
            />
          </Link>
          <Link to={"/"} aria-label="TMDB Home">
            <img
              src={Logo2}
              alt="logo"
              width={55}
              height={55}
              className="ml-[30vw] md:ml-auto  md:mr-[50vw] lg:hidden"
            />
          </Link>
          <ul className="menu menu-horizontal hidden text-base font-semibold lg:flex">
            {/* Navbar menu content here */}
            <li>
              <Dropdown
                title="Movies"
                options={["Popular", "Now Playing", "Upcoming", "Top Rated"]}
              />
            </li>
            <li>
              <Dropdown
                title="TV Shows"
                options={["Popular", "Airing Today", "On TV", "Top Rated"]}
              />
            </li>
            <li>
              <Dropdown title="People" options={["Popular People"]} />
            </li>
            <li>
              <Dropdown
                title="More"
                options={["Discussions", "Leaderboard", "Support", "API"]}
              />
            </li>
          </ul>
        </div>
        <div className="hidden flex-none lg:flex">
          <div className="flex-1 bg-tmdbDarkBlue lg:mx-2 lg:pr-0">
            <ul className="menu menu-horizontal hidden items-center text-base font-semibold lg:flex">
              <li className="me-3">
                <a href="#">
                  <img
                    src={PlusIcon}
                    alt="plus-icon"
                    width={20}
                    height={20}
                  ></img>
                </a>
              </li>
              <li className="me-2">
                <div
                  className="flex h-6 w-7 rounded-sm  border border-white p-1  text-[14.4px] font-semibold 
                text-white transition-colors duration-100 hover:bg-white hover:text-[rgb(3,37,65)] "
                >
                  EN
                </div>
              </li>
              <li>
                <p>Login</p>
              </li>
              <li>
                <p>Join TMDB</p>
              </li>
              <li>
                <a href="#">
                  <img
                    src={SearchIcon}
                    alt="search-icon"
                    className="h-6 w-6 bg-transparent p-[0px]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarItems;
