
import { useMoviesStore } from "../../config/store/store";
import { useTrendingMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";
import { SwiperSlide } from "swiper/react";

export const Trending = () => {
  // Usamos el store de Zustand para acceder a los valores
  const { timePeriods, contentSelected } = useMoviesStore()

  const { data, status } = useTrendingMovies(contentSelected);

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">Trending</span>
        <SwitchTab options={timePeriods} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};