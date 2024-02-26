import React from "react";
import { PlusIcon } from "../../utils/svgs";
import { useImages } from "../../utils/customHooks";
import LoadingSpinner from "../loader/LoadingSpinner";
import ErrorMessage from "../error/ErrorMessage";

const ImageList = React.memo(
  ({
    id,
    platform,
    type,
  }: {
    id: string | undefined;
    platform: string;
    type: string;
  }) => {
    const {
      data: ImageData,
      isLoading: imageDataLoading,
      error,
    } = useImages(Number(id), platform);

    if (imageDataLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    let imageBaseUrlPath = "";
    let data = [];

    if (type === "backdrops") {
      data = ImageData?.backdrops;
      imageBaseUrlPath =
        "https://media.themoviedb.org/t/p/w533_and_h300_bestv2";
    } else {
      data = ImageData?.posters;
      imageBaseUrlPath = "https://image.tmdb.org/t/p/w188_and_h282_bestv2";
    }

    return (
      <div
        className="flex h-[300px] w-[300px] overflow-y-hidden overflow-x-scroll 
      md:w-[53vw] lg:w-[74vw] xl:w-[1060px]"
      >
        {data?.length > 0 ? (
          data?.map((item: any, index: number) => {
            if (index < 6) {
              return (
                <img
                  key={item.file_path}
                  src={`${imageBaseUrlPath}/${item.file_path}`}
                  alt="poster"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              );
            }
            if (index == 6) {
              return (
                <div
                  className="mx-5 flex w-full items-center justify-center whitespace-nowrap"
                  key={index}
                >
                  <p className="cursor-pointer text-lg font-bold hover:opacity-50 ">
                    View More
                  </p>
                </div>
              );
            }
          })
        ) : (
          <div className="ml-10 flex h-[300px] cursor-pointer items-center justify-start gap-2">
            <div className="rounded-full bg-black p-[2px]">
              <img
                src={PlusIcon}
                alt="add icon"
                className="h-3 w-3"
                loading="lazy"
              />
            </div>
            <p className="text-xl font-semibold hover:opacity-50">
              Add an Image
            </p>
          </div>
        )}
      </div>
    );
  },
);

export default ImageList;
