import { useContext } from "react";
import { useTopRatedMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider";
import { SwitchTab } from "../SwitchTab";
import { MoviesContext } from "../../context/MoviesContext";
import { MoviesContextType } from "../../interfaces/Context";

export const TopRated = () => {
  const { data, status } = useTopRatedMovies();
  const { t, timePeriods } = useContext(MoviesContext) as MoviesContextType;

  if (status === "loading") {
    return <p>Recuperando los productos...</p>;
  }
  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">
          {t("body.top-rated")}
        </span>
        <SwitchTab options={timePeriods} />
      </div>
      <Slider data={data} />
    </>
  );
};
