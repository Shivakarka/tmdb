import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../../utils/customHooks";
import SearchMediaCard from "./SearchMediaCard";

const Search = () => {
  const { page, mediaPlatform } = useParams<{
    page: string;
    mediaPlatform: string;
  }>();
  const [platform, setPlatform] = useState(mediaPlatform);
  const [activeTab, setActiveTab] = useState(mediaPlatform);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")!;
  const navigate = useNavigate();

  const { data: SearchData, isLoading: searchDataLoading } = useSearch(
    query,
    platform,
    page,
  );

  if (searchDataLoading) {
    return (
      <div className="flex w-full justify-center md:h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (SearchData?.total_results === 0) {
    return (
      <div className="flex w-full items-center justify-center md:h-[60vh]">
        <p className="text-2xl font-semibold">No results found</p>
      </div>
    );
  }

  const handleNext = () => {
    navigate(`/search/${mediaPlatform}/${Number(page) + 1}?query=${query}`);
  };

  const handlePrevious = () => {
    navigate(`/search/${mediaPlatform}/${Number(page) - 1}?query=${query}`);
  };

  if (SearchData?.total_pages < Number(page)) {
    navigate(`/search/${mediaPlatform}/${Number(page) - 1}?query=${query}`);
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-5 md:flex-row md:items-start  ">
      <div className="my-7 ms-5 flex h-fit w-[258px] flex-col border">
        <div className="h-[54px] w-[258px] bg-tmdbLightBlue text-white">
          <p className="mt-3 text-center text-lg font-semibold">
            Search Results
          </p>
        </div>
        <div className=" flex w-full items-start justify-start gap-2 md:flex-col">
          <button
            className={`${
              activeTab === "movie" ? "bg-gray-300" : "bg-white"
            } h-[54px] w-full text-lg font-semibold text-black`}
            onClick={() => {
              setActiveTab("movie");
              setPlatform("movie");
              navigate(`/search/movie/1?query=${query}`);
            }}
          >
            Movies
          </button>
          <button
            className={`${
              activeTab === "tv" ? "bg-gray-300" : "bg-white"
            } h-[54px] w-full text-lg font-semibold text-black`}
            onClick={() => {
              setActiveTab("tv");
              setPlatform("tv");
              navigate(`/search/tv/1?query=${query}`);
            }}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className="my-7 ms-2 flex w-full  flex-col gap-4 md:w-[50vw]">
        {SearchData?.results?.map((item: any) => (
          <SearchMediaCard item={item} key={item.id} />
        ))}
        <div className="join mx-auto grid w-fit grid-cols-2">
          <button
            className="btn btn-outline join-item"
            disabled={page === "1"}
            onClick={handlePrevious}
          >
            Previous page
          </button>
          <button
            className="btn btn-outline join-item"
            disabled={SearchData?.total_pages === Number(page)}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
