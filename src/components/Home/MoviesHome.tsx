import { contentTypes, timePeriods } from "../../utils/constants";
import { SwitchTab } from "../SwitchTab";
import { TopRated } from "./TopRated";
import { Trending } from "./Trending";

export const MoviesHome = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold">Trending</span>
        <SwitchTab options={contentTypes} />
      </div>
      <Trending />
      <div className="flex justify-between">
        <span className="text-2xl ml-3 font-bold">Top Rated</span>
        <SwitchTab options={timePeriods} />
      </div>
      <TopRated />
    </div>
  );
};
