import ReactPlayer from 'react-player/lazy'
import { LoadingSpinner } from "../../core/LoadingSpinner"
import { useVideos } from "../../hooks/useMovies"
import { useMoviesStore } from '../../config/store/store'
import {ModalVideo} from './ModalVideo'
import { useState } from 'react'



export const Videos = ({id, type}:{id: number, type: string}) => {
  const {openVideoModal, setOpenVideoModal} = useMoviesStore()
  const [selectedVideoKey, setSelectedVideoKey] = useState<string | null>(null);
  console.log(openVideoModal, "openVideoModal")

const {data: videos, isLoading} = useVideos(type, id)

if(isLoading) return <LoadingSpinner/>
if(!videos) return null;


    return (
      <>
 
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">

          {videos.results.map((video:any) => (
            <div
            key={video.id}
            className="relative cursor-pointer"
            onClick={() => {
              setSelectedVideoKey(video.key);
              setOpenVideoModal(true);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              alt={video.name}
              className="w-full h-auto rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
              ▶
            </div>
          </div>
        ))}
        </div>
        {openVideoModal && <ModalVideo selectedVideoKey={selectedVideoKey} />}
      </>
    )
}
// https://www.youtube.com/watch?v=gk5mmrCVwSc es con la key https://api.themoviedb.org/3/tv/1668/videos? 