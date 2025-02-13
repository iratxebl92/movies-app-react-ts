
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { Trending } from "./Trending";


export const MoviesHome = () => {

  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <Trending />
      <TopRated />
      <Popular/>
    </div>
  );
};
