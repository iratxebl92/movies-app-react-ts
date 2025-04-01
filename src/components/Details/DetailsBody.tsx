import { useParams } from "react-router-dom"
import { useDetailsAndCast } from "../../hooks/useMovies"
import { Backdrops } from "./Backdrops"
import { CastSlider } from "./CastSlider"
import { DetailsBanner } from "./DetailsBanner"
import { useMoviesStore } from "../../config/store/store"

export const DetailsBody = () => {
  const {id, type} = useParams()
  const {language} = useMoviesStore()

  const {data, status} = useDetailsAndCast(type, id, language)
  console.log(data, "data en DetailsBody")

  return (
    <div className=" dark:bg-dark max-w-7xl text-center align-center justify-center mx-auto px-5">
       <DetailsBanner data={data} />
       <CastSlider castData={data?.credits} />

       {/* <Backdrops /> */}
    </div>
  )
}
