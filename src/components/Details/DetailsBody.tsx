import { useParams } from "react-router-dom"
import { useDetailsAndCast } from "../../hooks/useMovies"
import { Backdrops } from "./Backdrops"
import { CastSlider } from "./CastSlider"
import { DetailsBanner } from "./DetailsBanner"
import { useMoviesStore } from "../../config/store/store"
import { CastModal } from "./CastModal"
import { ContentShowcase } from "./ContentShowcase "

export const DetailsBody = () => {
  const {id, type} = useParams()
  const {language} = useMoviesStore()

  const {data, status} = useDetailsAndCast(type || 'movie', Number(id), language)


  return (
    <div className="dark:bg-dark text-center align-center justify-center mx-auto">
       <DetailsBanner data={data} />
       <CastSlider castData={data?.credits} status={status} />
       <CastModal castData={data?.credits} />
       <ContentShowcase data={data} type={type} />
       {/* <Backdrops /> */}
    </div>
  )
}
