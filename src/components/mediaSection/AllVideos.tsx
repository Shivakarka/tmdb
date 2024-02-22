import MediaTrailerCard from "./MediaTrailerCard";
import PlusIcon from "../../assets/icons/plus-icon.svg";

const AllVideos = ({ TrailerData }: { TrailerData: any }) => {
  return (
    <div className="flex h-[300px] w-[300px] overflow-y-hidden overflow-x-scroll md:w-[53vw] lg:w-[74vw] xl:w-[1060px] ">
      {TrailerData?.results?.length > 0 ? (
        TrailerData?.results?.map((item: any) => {
          return (
            <MediaTrailerCard
              key={item.id}
              trailerKey={item.key}
              trailerName={item.name}
            />
          );
        })
      ) : (
        <div className="ml-10 flex h-[300px] cursor-pointer items-center justify-start gap-2">
          <div className="rounded-full bg-black p-[2px]">
            <img src={PlusIcon} alt="add icon" className="h-3 w-3" />
          </div>
          <p className="text-xl font-semibold hover:opacity-50">Add a Video</p>
        </div>
      )}
    </div>
  );
};

export default AllVideos;
