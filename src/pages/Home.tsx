import { AnimatedSection } from "../core/AnimatedSection"
import { HeroBanner } from "../components/Home/HeroBanner"
import { Popular } from "../components/Home/Popular"
import { TopRated } from "../components/Home/TopRated"
import { Trending } from "../components/Home/Trending"


export const Home = () => {


  return (
    <div className="dark:bg-dark h-full max-w-1920 m-auto">
      <HeroBanner />
      <div className="mt-10 mx-8">
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
    </div>
  )
}
