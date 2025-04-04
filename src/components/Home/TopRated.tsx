import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";

export const TopRated = () => {
  const { topRatedSelected, topRatedOption, language } = useMoviesStore();
  const { t } = useTranslation();
  const { data, status } = useTopRatedMovies(topRatedSelected, language);

  const onTabChange = (tab: string) => {
    topRatedOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
  };

  const options = language === "es" ? ["Películas", "Tv Show"] : ["Movies", "Tv Show"];

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold dark:text-white">{t('topRated')}</h2>
        <SwitchTab options={options} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
