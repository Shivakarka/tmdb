import NavBarItems from "./NavBarItems.tsx";
import SideBar from "./sidebar/SideBar.tsx";

export const NavBar = () => {
  return (
    <>
      <div className="drawer bg-tmdbDarkBlue">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <NavBarItems />
        <SideBar />
      </div>
    </>
  );
};
