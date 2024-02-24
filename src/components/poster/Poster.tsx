import NoImage from "../../assets/images/noImage.svg";
import ExpandIcon from "../../assets/icons/expandIcon.svg";

const Poster = ({ poster_path }: { poster_path: string }) => {
  return (
    <>
      {
        <img
          src={
            poster_path
              ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
              : NoImage
          }
          alt={"poster"}
          className={
            poster_path
              ? " absolute z-[5] ml-2 mt-1 h-fit w-[100px] md:ml-auto md:mt-0  md:h-fit md:w-fit md:pl-0 md:hover:hidden lg:right-0 lg:top-0"
              : "h-[150px] w-[100px] border md:ml-auto md:mt-2 md:h-[320px] md:w-[300px] lg:h-[450px]"
          }
          style={{ borderRadius: "8px" }}
          loading="lazy"
        />
      }
      {
        <div className="relative ">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_multi_faces_filter(blur)${poster_path}`}
            alt={"poster"}
            className={
              " absolute right-0 top-[2vh] ml-2  mt-1  h-fit w-[100px]  md:top-[-0vh] md:ml-auto md:mt-0 md:h-fit md:w-fit md:pl-0 lg:top-[0vh]"
            }
            style={{ borderRadius: "8px" }}
            loading="lazy"
          />
          <div className="absolute right-5 top-[-100px]  flex items-center justify-center gap-2 md:right-[5.5rem] md:top-[15vh] lg:top-[210px]">
            <img
              src={ExpandIcon}
              alt="expand icon"
              className=" h-[26px] w-[26px] md:block"
            />
            <p className=" text-xl text-white">Expand</p>
          </div>
        </div>
      }
    </>
  );
};

export default Poster;
