import { useEffect, useState } from "react";
import { useVideos } from "../../../hooks/useMovies";
import { useMoviesStore } from "../../../config/store/store";
import { ModalVideo } from "../Modals/ModalVideo";
import * as motion from "motion/react-client";
import { IoPlayCircleOutline } from "react-icons/io5";
import OptionsSelect from "../../../core/OptionsSelect";
import { t } from "i18next";
import { VideoSkeleton } from "../../Skeleton/VideosSkeleton";


export const Videos = ({ id, type }: { id: number; type: string }) => {
  const {
    openVideoModal,
    setOpenVideoModal,
    setCurrentVideoIndex,
    selectedVideoKey,
    setSelectedVideoKey,
    setVideos,
  } = useMoviesStore();

  const { data, isLoading } = useVideos(type, id);
  const [selectedType, setSelectedType] = useState<string>("");
  const [filteredVideos, setFilteredVideos] = useState<any[]>([]);

  useEffect(() => {
    if (data?.results) {
      const types = [...new Set(data.results.map((video: any) => video.type))];
      if (types.length > 0 && !selectedType) {
        setSelectedType(types[0] as string);
      }
    }
  }, [data]);
  if(isLoading) return <VideoSkeleton/>

  useEffect(() => {
    if (data?.results && selectedType) {
      const filtered = data.results.filter((video: any) => video.type === selectedType);
      setFilteredVideos(filtered);
      setVideos({ results: filtered });
    }
  }, [data, selectedType]);

  const handleOptionChange = (type: string) => {
    setSelectedType(type);
  };

  if (!data?.results) return null;

  const uniqueVideosTypes = [...new Set(data.results.map((video: any) => video.type))];

  return (
    <>
    {
      data?.results && data?.results.length > 0  &&
   
      <OptionsSelect 
        style={{width: '300px', marginLeft: '20px'}} 
        value={selectedType}
        onOptionChange={handleOptionChange}
        options={uniqueVideosTypes} 
      />
   }
      
      <div className="w-full min-h-[200px]">
        {
          data?.results && data?.results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-5 justify-start">
            {filteredVideos.map((video: any, index: number) => (
              <motion.div key={video.id} whileHover={{ scale: 1.016 }} className="h-full">
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                    alt={video.name}
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute opacity-0 hover:opacity-100 inset-0 rounded-2xl bg-black bg-opacity-40 flex items-center justify-center text-white">
                    <button
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        setSelectedVideoKey(video.key);
                        setOpenVideoModal(true);
                        setCurrentVideoIndex(index);
                      }}
                    >
                      <IoPlayCircleOutline className="text-white/80 w-10 h-10 hover:w-14 hover:h-14" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          )
          :
          <div className="flex justify-center items-center h-full min-h-[10vh]" aria-label={t('noVideos')}>
          <p className="text-2xl font-bold text-center text-neutral-500">{t('noVideos')}</p>
        </div>
        }
        
      </div>

      {openVideoModal && (
        <ModalVideo selectedVideoKey={selectedVideoKey} />
      )}
    </>
  );
}
// https://www.youtube.com/watch?v=gk5mmrCVwSc es con la key https://api.themoviedb.org/3/tv/1668/videos?
