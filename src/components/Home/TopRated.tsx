import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";

export const TopRated = () => {
  // Usamos el store de Zustand para acceder a los valores
  const { topRatedOption, topRatedSelected, language } = useMoviesStore();
  const {t} = useTranslation();
  const { data, status } = useTopRatedMovies(topRatedSelected, language);

  // Cambia entre "movie" y "tv" dependiendo de la opción seleccionada
  const onTabChange = (tab: string) => {
    topRatedOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
  };

  // Definir las opciones basadas en el idioma
  const options = language === "es" ? ["Películas", "Series"] : ["Movies", "TV Shows"];

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">
          {t('topRated')}
        </span>
        <SwitchTab options={options} onTabChange={onTabChange} />
      </div>
      <Slider data={data} status={status} />
    </>
  );
};
