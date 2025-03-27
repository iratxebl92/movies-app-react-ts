import { useParams } from "react-router-dom"
import { useCast, useDetails } from "../../hooks/useMovies"
import { Backdrops } from "./Backdrops"
import { CastSlider } from "./CastSlider"
import { DetailsBanner } from "./DetailsBanner"
import { useMoviesStore } from "../../config/store/store"

export const DetailsBody = () => {
  const {id, type} = useParams()
  const {language} = useMoviesStore()
  console.log(type, "TYPE EN DETAILS")
  

    const {data, status} =  useDetails(type, id, language)
    const {data: castData} = useCast("hola", id) //creo alias castData para no confundir con data de useDetails y xq no se puede repetir

  return (
    <div className=" dark:bg-dark max-w-7xl text-center align-center justify-center mx-auto px-5">
       <DetailsBanner data={data} castData={castData} />
       <CastSlider castData={castData} />

       {/* <Backdrops /> */}
    </div>
  )
}
