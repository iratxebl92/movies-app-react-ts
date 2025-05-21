
import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../../core/Slider";
import { SwitchTab } from "../../core/SwitchTab";

export const TopRated = () => {
  const { language, topRatedSelected, topRatedOption } = useMoviesStore();
  const { t } = useTranslation();
  const { data, status } = useTopRatedMovies(topRatedSelected, language);

  const onTabChange = (tab: string) => {
    topRatedOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
  };

  const options = [t('movies'), t('tv')]
  const selectedIndex = topRatedSelected === "movie" ? 0 : 1;
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl  md:font-bold dark:text-white">{t('topRated')}</h2>
        <SwitchTab options={options} onTabChange={onTabChange} selectedIndex={selectedIndex} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
