import Logo1 from "../../assets/images/logo1.svg";
import Logo2 from "../../assets/images/logo2.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";

const NavBarItems = () => {
  return (
    <div className="drawer-content flex flex-col bg-[rgb(3,37,65)]">
      {/* Navbar */}
      <div className="w-[1300px] mx-auto flex justify-center p-0 navbar z-40 bg-[rgb(3,37,65)] text-white px-3">
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
              className="inline-block w-6 h-6 stroke-current"
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
        <div className="flex-1 ms-[25vw] md:ms-[40vw] lg:px-2 lg:mx-2 bg-[rgb(3,37,65)]">
          <img
            src={Logo1}
            alt="logo"
            width={154}
            height={20}
            className="hidden lg:block"
          />
          <img
            src={Logo2}
            alt="logo"
            width={55}
            height={55}
            className="lg:hidden"
          />
          <ul className="menu menu-horizontal hidden lg:flex text-base font-semibold">
            {/* Navbar menu content here */}
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>TV Shows</a>
            </li>
            <li>
              <a>People</a>
            </li>
            <li>
              <a>More</a>
            </li>
          </ul>
        </div>
        <div className="flex-none hidden lg:flex">
          <div className="flex-1 lg:px-2 lg:mx-2 bg-[rgb(3,37,65)]">
            <ul className="menu menu-horizontal hidden items-center lg:flex text-base font-semibold">
              <li className="me-3">
                <a>
                  <img
                    src={PlusIcon}
                    alt="plus-icon"
                    width={20}
                    height={20}
                  ></img>
                </a>
              </li>
              <li className="me-2">
                <div className="w-7 h-6 border flex  border-white rounded-sm p-1  transition-colors duration-100 text-white font-semibold text-[14.4px] hover:bg-white hover:text-[rgb(3,37,65)] ">
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
                <a>
                  <img
                    src={SearchIcon}
                    alt="search-icon"
                    className="bg-transparent p-[0px] w-6 h-6"
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
