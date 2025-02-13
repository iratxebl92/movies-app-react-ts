
import { useMoviesStore } from "../../config/store/store";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";

export const TopRated = () => {
  // Usamos el store de Zustand para acceder a los valores
  const { topRatedOption, topRatedSelected } = useMoviesStore()

  const { data, status } = useTopRatedMovies(topRatedSelected);

  const onTabChange = (tab:string) =>{
    topRatedOption(tab === "Películas" ? "movie" : "tv")
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">
          Mejor Valorado
        </span>
        <SwitchTab options={['Películas', 'Series']} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </>
  );
};
