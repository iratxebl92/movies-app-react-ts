import { Recommendations } from "../components/Details/Recommendations/Recommendations"
import { ContentShowcase } from "../components/Details/Main/ContentShowCase"
import { DetailsBanner } from "../components/Details/Main/DetailsBanner"
import { useDetailsAndCast } from "../hooks/useMovies"
import { useMoviesStore } from "../config/store/store"
import { useParams } from "react-router-dom"

import { NotFound } from "../core/NotFound"

type urlParamsType = {
    idAndName: string; 
    type: "movie" | "tv";
}

export const Details = () => {

    const {idAndName, type} = useParams<urlParamsType>()
    if (!idAndName || !type) {
        return <NotFound />;
    }
 
    const id = idAndName.split("-")[0] || "";
    const {language} = useMoviesStore()

    const {data, isLoading, isError} = useDetailsAndCast(type || 'movie', Number(id), language)
    
    if (!data) return null;

    if(isError) return <NotFound />

  return (
    <div className="dark:bg-dark text-center align-center justify-center mx-auto">
    
    <DetailsBanner data={data} type={type} isLoading={isLoading} />
    <ContentShowcase data={data} type={type} />
    <section className="px-8">
       <Recommendations id={id} type={type} language={language} />
    </section>
    </div>
  )
}

//TODO: Mirar ejemplo http://localhost:5173/details/movie/241809-Our-Better-World no tiene info, hacer que si isError es true sque la pagina 404