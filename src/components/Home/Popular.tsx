import { useMoviesStore } from "../../config/store/store";
import { SwitchTab } from "../SwitchTab";
import { Slider } from "../Slider";
import { usePopularMovies } from "../../hooks/useMovies";

export const Popular = () => {
  const { popularOption, popularSelected } = useMoviesStore();

  const { data, status } = usePopularMovies(popularSelected);

  const onTabChange = (tab: string) => {
    popularOption(tab === "Películas" ? "movie" : "tv");
  };

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">Popular</span>
        <SwitchTab options={["Películas", "Series"]} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
