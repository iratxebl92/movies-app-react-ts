import { useState, useEffect } from "react";
import { useVideos } from "../../../../hooks/useMovies";
import { useMoviesStore } from "../../../../config/store/store";
import { IVideo } from "../../../../interfaces/IVideo";

export const useVideo = (type: string, id: number) => {
  const {
    setOpenVideoModal,
    setCurrentVideoIndex,
    setSelectedVideoKey,
    setVideos,
  } = useMoviesStore();

  const { data, isLoading, isFetching } = useVideos(type, id);
  const [selectedType, setSelectedType] = useState<string>("");
  const [filteredVideos, setFilteredVideos] = useState<IVideo[]>([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (data?.results) {
      const types = [...new Set(data.results.map((video: IVideo) => video.type))];
      if (types.length > 0 && !selectedType) {
        setSelectedType(types[0] as string);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data?.results && selectedType) {
      const filtered = data.results.filter((video: IVideo) => video.type === selectedType);
      setFilteredVideos(filtered);
      setVideos(filtered);
    }
  }, [data, selectedType]);

  const handleOptionChange = (type: string) => {
    setSelectedType(type);
  };

  const handleVideoClick = (videoKey: string, index: number) => {
    setSelectedVideoKey(videoKey);
    setOpenVideoModal(true);
    setCurrentVideoIndex(index);
  };

  const uniqueVideosTypes = data?.results ? [...new Set(data.results.map((video: IVideo) => video.type))] : [];

  return {
    isLoading,
    isFetching,
    selectedType,
    setSelectedType,
    filteredVideos,
    showSkeleton,
    loading,
    handleOptionChange,
    handleVideoClick,
    uniqueVideosTypes,
    data,
  };
};
  