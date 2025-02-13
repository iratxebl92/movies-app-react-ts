import { useMoviesStore } from "../../config/store/store";
import { SwitchTab } from "../SwitchTab";
import { Slider } from "../Slider";
import { usePopularMovies } from "../../hooks/useMovies";
import { useTranslation } from "react-i18next";

export const Popular = () => {
  const { popularOption, popularSelected, language } = useMoviesStore();
    const {t} = useTranslation();

  const { data, status } = usePopularMovies(popularSelected, language);

  const onTabChange = (tab: string) => {
    popularOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
  };
  const options = language === "es" ? ["Películas", "Series"] : ["Movies", "TV Shows"];


  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white"> {t('popular')} </span>
        <SwitchTab options={options} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
