
import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useTrendingMovies } from "../../hooks/useMovies";
import { Slider } from "../../core/Slider";
import { SwitchTab } from "../../core/SwitchTab";

export const Trending = () => {

  const { language, trendingOption, trendingSelected } = useMoviesStore();
  const { t } = useTranslation();
  const { data, status } = useTrendingMovies(trendingSelected, language);

  const onTabChange = (tab: string) => {
    trendingOption(tab === "Semana" || tab === "Week" ? "week" : "day");

  };
  const options = [t('week'), t('day')]
  const selectedIndex = trendingSelected === "week" ? 0 : 1;

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold dark:text-white">{t('trending')}</h2>
        <SwitchTab options={options} onTabChange={onTabChange} selectedIndex={selectedIndex} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};