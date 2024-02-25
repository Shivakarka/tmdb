import { useEffect } from "react";
import TvDetailsHeader from "../components/tvDetails/tvDetailsHeader/TvDetailsHeader.tsx";
import TvDetailsMain from "../components/tvDetails/tvDetailsMain/TvDetailsMain.tsx";

const TvDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TvDetailsHeader />
      <TvDetailsMain />
    </>
  );
};

export default TvDetailsPage;
