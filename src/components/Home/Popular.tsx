
import { useState } from "react";
import { useMoviesStore } from "../../config/store/store";
import { SwitchTab } from "../../core/SwitchTab";
import { Slider } from "../../core/Slider";
import { usePopularMovies } from "../../hooks/useMovies";
import { useTranslation } from "react-i18next";

export const Popular = () => {
  const { language, popularOption, popularSelected } = useMoviesStore();
  const { t } = useTranslation();
  const { data, status } = usePopularMovies(popularSelected, language);

  const onTabChange = (tab: string) => {
    popularOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
  };

  
  const options = [t('movies'), t('tv')]
  const selectedIndex = popularSelected === "movie" ? 0 : 1;
  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold dark:text-white">{t('popular')}</h2>
        <SwitchTab options={options} onTabChange={onTabChange} selectedIndex={selectedIndex} />
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
