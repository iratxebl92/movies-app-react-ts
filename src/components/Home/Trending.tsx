
import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useTrendingMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";

export const Trending = () => {
  // Usamos el store de Zustand para acceder a los valores
  const { trendingSelected, trendingOption, language } = useMoviesStore()
  const {t} = useTranslation();

  
  const { data, status } = useTrendingMovies(trendingSelected, language);

  const onTabChange = (tab:string) =>{
    trendingOption(tab === "Semana" || tab === "Week" ? "week" : "day")
  }
  const options = language === "es" ? ["Semana", "Día"] : ["Week", "Day"];

  if (status === "error") {
    return <p>Error</p>;
  }
  

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">{t('trending')} </span>
        <SwitchTab options={  options} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};