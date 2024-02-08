import NavBarItems from "./NavBarItems";
import SideBar from "./SideBar";

export const NavBar = () => {
  return (
    <>
      <div className="drawer bg-[rgb(3,37,65)]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <NavBarItems />
        <SideBar />
      </div>
    </>
  );
};
