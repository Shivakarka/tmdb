const Backdrops = ({ ImageData }: { ImageData: any }) => {
  return (
    <div className="flex h-[300px] w-[300px] overflow-y-hidden overflow-x-scroll md:w-[415px] lg:w-[700px] xl:w-[980px] ">
      {ImageData?.backdrops &&
        ImageData?.backdrops?.map((item: any, index: number) => {
          if (index < 6) {
            return (
              <img
                key={item.file_path}
                src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${item.file_path}`}
                alt="backdrop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            );
          }
          if (index == 6) {
            return (
              <div
                className="mx-5 flex w-full cursor-pointer items-center justify-center whitespace-nowrap"
                key={index}
              >
                <p className="text-lg font-bold">View More</p>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Backdrops;
