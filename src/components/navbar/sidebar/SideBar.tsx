import SidebarItem from "./SideBarItem.tsx";

const SideBar = () => {
  const mainItems = ["Movies", "TV Shows", "People"];
  const secondaryItems = [
    "Contribution Bible",
    "Discussions",
    "Leaderboard",
    "API",
    "Support",
    "About",
    "Login",
  ];

  return (
    <div className="drawer-side fixed z-30 bg-transparent">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay  "
      ></label>
      <nav className="menu min-h-full w-80 bg-[rgb(26,56,82)] pt-[4rem] text-xl font-semibold text-white">
        <ul>
          {mainItems.map((item, index) => (
            <SidebarItem key={index}>{item}</SidebarItem>
          ))}
        </ul>
        <section className="mt-4 flex max-h-0.5 flex-col items-start text-base font-semibold text-zinc-400">
          <ul>
            {secondaryItems.map((item, index) => (
              <SidebarItem key={index}>{item}</SidebarItem>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default SideBar;
