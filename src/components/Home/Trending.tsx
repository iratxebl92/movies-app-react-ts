
import { useMoviesStore } from "../../config/store/store";
import { useTrendingMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";

export const Trending = () => {
  // Usamos el store de Zustand para acceder a los valores
  const { trendingSelected, trendingOption } = useMoviesStore()

  const { data, status } = useTrendingMovies(trendingSelected);

  const onTabChange = (tab:string) =>{
    trendingOption(tab === "Semana" ? "week" : "day")
  }

  if (status === "error") {
    return <p>Error</p>;
  }
  

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">Tendencia</span>
        <SwitchTab options={['Semana', 'Día']} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};