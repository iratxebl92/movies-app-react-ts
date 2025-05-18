import { useParams } from "react-router-dom"
import { useDetailsAndCast } from "../../hooks/useMovies"
import { DetailsBanner } from "./DetailsBanner"
import { useMoviesStore } from "../../config/store/store"

import { ContentShowcase } from "./ContentShowCase"
import { Recommendations } from "./Recommendations"

export const DetailsBody = () => {
  const {idAndName, type} : {idAndName:string, type: "movie" | "tv"} = useParams()
  console.log(idAndName, "idAndName")
  const [id] = idAndName.split("-");
  const {language} = useMoviesStore()

  const {data, status} = useDetailsAndCast(type || 'movie', Number(id), language)


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
