import { useCast, useDetails } from "../../hooks/useMovies"
import { Backdrops } from "./Backdrops"
import { CastSlider } from "./CastSlider"
import { DetailsBanner } from "./DetailsBanner"
import { OptionsTab } from "./OptionsTab"

export const DetailsBody = () => {

    const {data, status} =  useDetails("hola", 5, "hola")
    const {data: castData} = useCast("hola", 5) //creo alias castData para no confundir con data de useDetails y xq no se puede repetir

  return (
    <div className=" dark:bg-dark max-w-7xl text-center align-center justify-center mx-auto px-5">
       <DetailsBanner data={data} castData={castData} />
       <CastSlider castData={castData} />
       <OptionsTab/>
       {/* <Backdrops /> */}
    </div>
  )
}
