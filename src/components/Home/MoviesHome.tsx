import { AnimatedSection } from "../AnimatedSection";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { Trending } from "./Trending";


export const MoviesHome = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto pb-10">
      <AnimatedSection>
        <Trending />
      </AnimatedSection>
      <AnimatedSection>
        <TopRated />
      </AnimatedSection>
      <AnimatedSection>
        <Popular />
      </AnimatedSection>
    </div>
  );
};
