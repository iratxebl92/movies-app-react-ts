import { useParams } from "react-router-dom"
import { useContentKeywords } from "../../hooks/useMovies"
import { Card } from "../../core/Card";
import { IMovie } from "../../interfaces/IMovie";
import { SwitchTab } from "../../core/SwitchTab";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react"
import { NotFound } from "../../core/NotFound";
import SkeletonKeywords from "../../components/Skeleton/SkeletonKeywords";

type urlParamsType = {
  idAndName: string; 
  type: "movie" | "tv";
}

export const Keywords = () => {
   const {keywordsOption, keywordsSelected, language} = useMoviesStore()
  const {t} = useTranslation()
  const { idAndName } = useParams<urlParamsType>(); // ${id}-${name.replace(/\s+/g, "-")}
 
  if(!idAndName) return null;

  const [id, ...rest] = idAndName.split("-") || []; //Mirar abajo apuntes
  const name = rest.join(" ");
  if (!id) return null; 
  
    const {data, isLoading, isError} = useContentKeywords(keywordsSelected, id, language) 
    
    const results = data?.results
    const options = language === "es" ? ["Películas", "Tv Show"] : ["Movies", "Tv Show"];

    const selectedIndex = keywordsSelected === "movie" ? 0 : 1;

    const onTabChange = (tab: string) => {
      keywordsOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
    }
    if(isError) return <NotFound/>

    const opacityMotionTransition = {
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      },
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      transition: { duration: 0.250 }
    } as const;

  return (
    <AnimatePresence initial={false}>
      <motion.div key={keywordsSelected} {...opacityMotionTransition}>
    
    <div className="mt-7 min-h-[calc(100vh-200px)]">
      <p className="mb-10 text-3xl font-semibold text-center"> {t("resultsKeywordsTitle")} <span className="font-bold"> {name} </span> </p>
      <div className="flex justify-center">
      <SwitchTab options={options} onTabChange={onTabChange} selectedIndex={selectedIndex} />
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
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
/*
const { idAndName } = useParams();  --> trae todo lo de  ${id}-${name.replace(/\s+/g, "-")} por ejemplo 14909-alien-invasion
Tenemos que separar el id y el name, para ello hacemos:
  const [id, ...rest] = idAndName.split("-"); --> crea una const con lo de la izq del "-" y otra con la derecha del "-". Por ejemplo const id = 14909 y const rest = alien,invasion
  Esto es lo mismo que hacer 
      const parts = idAndName.split("-"); --> ["14909", "alien", "invasion"]
      const [id, ...rest] = parts;
    nos estamos ahorrando los pasos, desestructurando directamente con const [id, ...rest] = idAndName.split("-");
    id toma el primer valor del array.
    ...rest (con los ..., llamado rest operator) toma el resto de los elementos como un array nuevo.
    Si pusieramos [id, rest] entonces id cogeria el 1er elemento y rest SOLO el segundo elemento
Ahora hay que unir los elementos del array rest separandolos por un espacio -->const name = alien invasion


*/