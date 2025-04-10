import ReactPlayer from "react-player/lazy";
import { LoadingSpinner } from "../../core/LoadingSpinner";
import { useVideos } from "../../hooks/useMovies";
import { useMoviesStore } from "../../config/store/store";
import { ModalVideo } from "./ModalVideo";

export const Videos = ({ id, type }: { id: number; type: string }) => {
  const {
    openVideoModal,
    setOpenVideoModal,
    currentVideoIndex,
    setCurrentVideoIndex,
    selectedVideoKey,
    setSelectedVideoKey,
  } = useMoviesStore();

  const { data: videos, isLoading } = useVideos(type, id);
  if (isLoading) return <LoadingSpinner />;
  if (!videos) return null;

  return (
    <>
      <div className="flex flex-wrap gap-4 p-5 justify-center">
        {videos.results.map((video: any, index: number) => (
          <div
            key={video.id}
            className="relative cursor-pointer md:w-60"
            onClick={() => {
              setSelectedVideoKey(video.key);
              setOpenVideoModal(true);
              setCurrentVideoIndex(index);
            }}
            index={index}
          >
            <img
              src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
              alt={video.name}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white rounded-lg">
              ▶
            </div>
          </div>
        ))}
      </div>
      {openVideoModal && (
        <ModalVideo
          selectedVideoKey={selectedVideoKey}
          videos={videos}
          currentVideoIndex={currentVideoIndex}
        />
      )}
    </>
  );
};
// https://www.youtube.com/watch?v=gk5mmrCVwSc es con la key https://api.themoviedb.org/3/tv/1668/videos?
