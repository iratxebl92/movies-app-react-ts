import { useContext } from "react";
import { useTrendingMovies } from "../../hooks/useMovies";
import { Slider } from "../Slider"
import { SwitchTab } from "../SwitchTab";
import { MoviesContext } from "../../context/MoviesContext";
import { MoviesContextType } from "../../interfaces/Context";



export const Trending = () => {
  const {t, contentTypes, contentSelected} = useContext(MoviesContext) as MoviesContextType
  const { data, status } = useTrendingMovies(contentSelected)

  
    if (status === "loading") {
      return <p>Recuperando los productos...</p>;
    }
    if (status === "error") {
      return <p>Error</p>;
    }
  return (
    <>
      <div className="flex justify-between">
            <span className="text-2xl ml-3 font-bold dark:text-white"> {t("body.trending")} </span>
            <SwitchTab options={contentTypes} />
          </div>
    <Slider data={data} />
    </>
  )
}
