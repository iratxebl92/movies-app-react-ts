import { TopRated } from "./TopRated"
import { Trending } from "./Trending"



export const MoviesHome = () => {
  return (
    <div className="mt-10 max-w-75">
        <Trending/>
        <TopRated/>
    </div>
  )
}
