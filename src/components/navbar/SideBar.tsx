const SideBar = () => {
  return (
    <div className="drawer-side bg-transparent">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay  "
      ></label>
      <ul className="menu  w-80 min-h-full bg-[rgb(26,56,82)] text-white">
        {/* Sidebar content here */}
        <li className="pt-[4rem] font-semibold text-xl">
          <a>Movies</a>
        </li>
        <li className="font-semibold text-xl">
          <a>TV Shows</a>
        </li>
        <li className="font-semibold text-xl">
          <a>People</a>
        </li>

        <div className="flex flex-col items-start mt-4 text-base text-zinc-400 font-semibold max-h-0.5">
          <li>
            <a>Contribution Bible</a>
          </li>
          <li>
            <a>Discussions</a>
          </li>
          <li>
            <a>Leaderboard</a>
          </li>
          <li>
            <a>API</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li className="mt-3 ">
            <a>Login</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
