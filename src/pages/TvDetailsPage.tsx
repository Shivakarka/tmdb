import { useEffect } from "react";
import TvDetailsMain from "../components/tvDetails/TvDetailsMain.tsx";
import DetailsHeader from "../components/detailsPageHeader/DetailsHeader.tsx";

const TvDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DetailsHeader platform="tv" location="tvDetails" />
      <TvDetailsMain />
    </>
  );
};

export default TvDetailsPage;
