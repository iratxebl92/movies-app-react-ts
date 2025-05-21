import { Recommendations } from "../components/Details/Recommendations/Recommendations"
import { ContentShowcase } from "../components/Details/Main/ContentShowCase"
import { DetailsBanner } from "../components/Details/Main/DetailsBanner"
import { useDetailsAndCast } from "../hooks/useMovies"
import { useMoviesStore } from "../config/store/store"
import { useParams } from "react-router-dom"

type urlParamsType = {
    idAndName: string; 
    type: "movie" | "tv";
}

export const Details = () => {

    const {idAndName, type} = useParams<urlParamsType>()

    if (!idAndName || !type) {
        return null;
      }
    console.log(idAndName, "idAndName")
    const id = idAndName.split("-")[0] || "";
    const {language} = useMoviesStore()

    const {data} = useDetailsAndCast(type || 'movie', Number(id), language)
  return (
    <div className="dark:bg-dark text-center align-center justify-center mx-auto">
    
    <DetailsBanner data={data} type={type} />
      <section className="px-8">
       <ContentShowcase data={data} type={type} />
       <Recommendations id={id} type={type} language={language} />
      </section>
    </div>
  )
}

