import NavBarItems from "./NavBarItems";
import SideBar from "./SideBar";

export const NavBar = () => {
  return (
    <>
      <div className="bg-tmdbDarkBlue drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <NavBarItems />
        <SideBar />
      </div>
    </>
  );
};
