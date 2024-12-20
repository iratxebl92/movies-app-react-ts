import { contentTypes, timePeriods } from "../../utils/constants"
import { SwitchTab } from "../SwitchTab"
import { TopRated } from "./TopRated"
import { Trending } from "./Trending"



export const MoviesHome = () => {
  return (
    <div className="mt-10 max-w-75">
      <SwitchTab options={contentTypes} />
        <Trending/>
      <SwitchTab options={timePeriods} />
        <TopRated/>
    </div>
  )
}
