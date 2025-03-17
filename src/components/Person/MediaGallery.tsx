import * as motion from "motion/react-client"
import { Card } from "../Card";


type MediaGalleryPropr = {
  data: any,
  status: string
}

export const MediaGallery = ({data, status}:MediaGalleryPropr) => {

  
const gallery = [...(data?.cast || []), ...(data?.crew || [])]; //Unimos ambos arrays con spread operator
  console.log(gallery)
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
   {

      gallery.map((item, key) => (
      <Card movie={item} />
      ))

    
   }
    </div>
  )
}
//TODO: Hacer el type de data bien hecho
{/* <img className="rounded-xl w-full h-full" src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`} alt="" /> */}