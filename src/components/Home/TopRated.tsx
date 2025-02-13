import { useContext } from "react";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";
import { MoviesContext } from "../../context/MoviesContext";
import { MoviesContextType } from "../../interfaces/Context";


export const TopRated = () => {
  const { data, status } = useTopRatedMovies();
  const { timePeriods } = useContext(MoviesContext) as MoviesContextType;
  const skeletonSlides = Array.from({ length: 5 });

  // if (status === "success") {
  //   return (
  //     skeletonSlides.map((_, index) => (
        
  //       <SwiperSlide key={index} className="flex flex-col w-40 lg:w-48">
  //         <div className="flex flex-col gap-3">
  //           {/* Skeleton Image */}
  //           <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
  //           {/* Skeleton Text */}
  //           <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
  //           <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
  //         </div>
  //       </SwiperSlide>
  //     ))
  //   )
  // }
  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">
          Top Rated
        </span>
        <SwitchTab options={timePeriods} />
      </div>
      <Slider data={data} />
    </>
  );
};
