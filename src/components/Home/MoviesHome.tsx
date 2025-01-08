import { useContext } from "react";
import { MoviesContext } from '../../context/MoviesContext';
import { SwitchTab } from "../SwitchTab";
import { TopRated } from "./TopRated";
import { Trending } from "./Trending";
import { MoviesContextType } from "../../interfaces/Context";


export const MoviesHome = () => {

   const {t, contentTypes, timePeriods} = useContext(MoviesContext) as MoviesContextType


  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white"> {t("body.trending")} </span>
        <SwitchTab options={contentTypes} />
      </div>
      <Trending />
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold dark:text-white">{t("body.top-rated")}</span>
        <SwitchTab options={timePeriods} />
      </div>
      <TopRated />
    </div>
  );
};
