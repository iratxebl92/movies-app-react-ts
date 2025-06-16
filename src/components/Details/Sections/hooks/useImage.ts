import { useState, useEffect } from "react";
import { useImages } from "../../../../hooks/useMovies";

export const useImage = (type: string, id: number) => {
  const [imagesType, setImagesType] = useState<string>("backdrops");
  const { data: images, isLoading, isFetching } = useImages(type, id);
  const [selectedImages, setSelectedImages] = useState<any>(images?.backdrops);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!images) return;
    if (imagesType === "backdrops") {
      setSelectedImages(images.backdrops);
    } else {
      setSelectedImages(images.posters);
    }
  }, [imagesType, images]);

  const handleOptionChange = (option: string) => {
    setImagesType(option);
  };

  const imagesLocal = (selectedImages || []).map((element: any) => ({
    src: `https://www.themoviedb.org/t/p/original/${element.file_path}`,
    thumbnail: `https://www.themoviedb.org/t/p/w300/${element.file_path}`,
  }));

  return {
    imagesType,
    imagesLocal,
    isLoading,
    isFetching,
    showSkeleton,
    handleOptionChange
  };
};
  