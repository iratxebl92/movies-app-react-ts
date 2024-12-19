import { useTrendingMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider"



export const Trending = () => {


  const { data, status } = useTrendingMovies()
  
    console.log(data, "DATA")
  
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
