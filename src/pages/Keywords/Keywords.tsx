
import { Card } from "../../core/Card";
import { IMovie } from "../../interfaces/IMovie";
import { SwitchTab } from "../../core/SwitchTab";
import { useMoviesStore } from "../../config/store/store";
import { AnimatePresence, motion } from "motion/react"
import { NotFound } from "../../core/NotFound";
import SkeletonKeywords from "../../components/Skeleton/SkeletonKeywords";
import { opacityMotionTransition } from "../../utils/filters";
import { useKewords } from "./useKewords";


export const Keywords = () => {
  const {keywordsSelected} = useMoviesStore()
  const kewordsData = useKewords();

  if (!kewordsData) return <NotFound/>;

  const {t, name, isLoading, isError, results, options, selectedIndex, onTabChange} = kewordsData;
  if(isError) return <NotFound/>

   

  return (
    <AnimatePresence initial={false}>
      <motion.div key={keywordsSelected} {...opacityMotionTransition}>
    
    <div className="mt-7 mx-4 min-h-[calc(100vh-200px)]">
      <p className="mb-10 text-3xl font-semibold text-center"> {t("resultsKeywordsTitle")} <span className="font-bold"> {name} </span> </p>
      <div className="flex justify-center mb-10">
      <SwitchTab options={options} onTabChange={onTabChange} selectedIndex={selectedIndex} />
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mb-6">
      {
        isLoading ? (
         Array.from({ length: 12 }).map((_, i) => <div key={i} className="mb-6"><SkeletonKeywords /></div>)
        )
        :
    
      results?.map((result:IMovie) => (
        <Card movie={result} />
      ))
    
      }
    </div>
    </div>
    </motion.div>

        </AnimatePresence>
  )
}
