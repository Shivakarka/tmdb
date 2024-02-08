const SideBar = () => {
  return (
    <div className="drawer-side z-30 bg-transparent">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay  "
      ></label>
      <ul className="menu  min-h-full w-80 bg-[rgb(26,56,82)] text-white">
        {/* Sidebar content here */}
        <li className="pt-[4rem] text-xl font-semibold">
          <a>Movies</a>
        </li>
        <li className="text-xl font-semibold">
          <a>TV Shows</a>
        </li>
        <li className="text-xl font-semibold">
          <a>People</a>
        </li>

        <div className="mt-4 flex max-h-0.5 flex-col items-start text-base font-semibold text-zinc-400">
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
