import { useDetails } from "../../hooks/useMovies"
import { DetailsBanner } from "./DetailsBanner"

export const DetailsBody = () => {

    const {data, status} =  useDetails("hola", 5, "hola")

    console.log(data, "data details")

  return (
    <div className="max-w-7xl text-center align-center justify-center mx-auto px-5">
       <DetailsBanner data={data} />
    </div>
  )
}
