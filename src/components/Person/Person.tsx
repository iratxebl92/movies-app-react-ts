import { useMoviesStore } from "../../config/store/store"
import { usePersonImages, usePersonMovies } from "../../hooks/useMovies"
import { SwitchTab } from "../SwitchTab"
import { Information } from "./Information"
import { MediaGallery } from "./MediaGallery"
import { Photos } from "./Photos"



export const Person = () => {
  const {personContentOption, personContentSelected} = useMoviesStore()
  const {data, status} = usePersonMovies(personContentSelected, 1)
  const {data:imagesData} = usePersonImages(1)

    const onTabChange = (tab: string) => {
      personContentOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
      };



  return (
    <div className="max-w-1920 mx-10">
    <Information/>
    <Photos data={imagesData} />
    <SwitchTab options={['Movies', 'Tv Show']} onTabChange={onTabChange} className="flex justify-center py-10" />
    <MediaGallery data={data} status={status} />
    </div>
  )
}
