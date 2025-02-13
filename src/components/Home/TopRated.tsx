
import { useMoviesStore } from "../../config/store/store";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";

export const TopRated = () => {
  // Usamos el store de Zustand para acceder a los valores
  const { timePeriods, contentSelected } = useMoviesStore()

  const { data, status } = useTopRatedMovies(contentSelected);

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
