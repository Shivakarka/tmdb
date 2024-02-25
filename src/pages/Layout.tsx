import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.tsx";
import { NavBar } from "../components/navbar/NavBar.tsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
