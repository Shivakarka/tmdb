import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { NavBar } from "../components/navbar/NavBar";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="flex h-[60vh] w-full flex-col items-start justify-center gap-4 p-[100px]">
        <h1 className="text-2xl">
          Oops! We can't find the page you're looking for
        </h1>
        <p className="text-lg">
          You tried to request a page that doesn't exist. Please check the URL.
        </p>
        <button className="btn btn-primary w-fit" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
