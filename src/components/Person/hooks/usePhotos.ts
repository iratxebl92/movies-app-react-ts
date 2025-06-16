import { useEffect, useState } from "react";
import { usePersonImages } from "../../../hooks/useMovies";
import { useParams } from "react-router-dom";

export const usePhotos = () => {
  const { idAndName } = useParams();
  const [id] = idAndName?.split("-") || [];
  const { data, isLoading } = usePersonImages(Number(id));
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isLoading]);

  if (!idAndName || !data) return null;

  return {
    data,
    isLoading,
    showSkeleton
  };
}; 