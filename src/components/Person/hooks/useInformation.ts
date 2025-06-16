import { useEffect, useState } from "react";
import { usePersonInformation } from "../../../hooks/useMovies";
import { useMoviesStore } from "../../../config/store/store";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const useInformation = () => {
  const { idAndName } = useParams();
  const [id] = idAndName?.split("-") || [];
  const { language } = useMoviesStore();
  const { data, isLoading } = usePersonInformation(Number(id), language);
  const { t } = useTranslation();
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

  const gender = data?.gender === 0 ? t("notSpecified") : data?.gender === 1 ? t("female") : t("male");
  const biographyArray = data && data.biography.split('\n') || [];

  return {
    data,
    isLoading,
    showSkeleton,
    gender,
    biographyArray,
    id
  };
}; 