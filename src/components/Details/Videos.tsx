import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../core/LoadingSpinner";
import { useVideos } from "../../hooks/useMovies";
import { useMoviesStore } from "../../config/store/store";
import { ModalVideo } from "./ModalVideo";
import * as motion from "motion/react-client";
import { IoPlayCircleOutline } from "react-icons/io5";
import OptionsSelect from "../OptionsSelect";

export const Videos = ({ id, type }: { id: number; type: string }) => {
  const {
    openVideoModal,
    setOpenVideoModal,
    setCurrentVideoIndex,
    selectedVideoKey,
    setSelectedVideoKey,
    setVideos,
    videos
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

  if (isLoading) return <LoadingSpinner />;
  if (!data?.results) return null;

  const uniqueVideosTypes = [...new Set(data.results.map((video: any) => video.type))];

  return (
    <>
      <OptionsSelect 
        options={uniqueVideosTypes} 
        style={{width: '300px', marginLeft: '20px'}} 
        onOptionChange={handleOptionChange}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-5 justify-start">
        {filteredVideos.map((video: any, index: number) => (
          <motion.div key={video.id} whileHover={{ scale: 1.016 }} className="h-full">
            <div className="relative ">
              <img
                src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                alt={video.name}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-40 flex items-center justify-center text-white">
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

      {openVideoModal && (
        <ModalVideo selectedVideoKey={selectedVideoKey} />
      )}
    </>
  );
}
// https://www.youtube.com/watch?v=gk5mmrCVwSc es con la key https://api.themoviedb.org/3/tv/1668/videos?
