import { useTopRatedMovies } from "../../hooks/useMovies"
import { Slider } from "../Slider";


export const TopRated = () => {

const {data, status} = useTopRatedMovies()

  
if (status === "loading") {
  return <p>Recuperando los productos...</p>;
}
if (status === "error") {
  return <p>Error</p>;
}


  return (
   <Slider data={data} />
  )
}
