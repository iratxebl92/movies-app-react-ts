import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IMovie } from "../../../../interfaces/IMovie";
import { detailsOptions } from "../../../../utils/filters";
import { FaTv } from "react-icons/fa";
import { 
  UseContentShowcaseProps, 
  ContentResult, 
  DetailOption 
} from "../../../../interfaces/IContentShowCase";

export const useContentShowCase = ({ data, type }: UseContentShowcaseProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('information');
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'reviews') {
      setSelectedOption('reviews');
      setTimeout(() => {
        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const options: DetailOption[] = useMemo(() => 
    type === "tv" 
      ? [...detailsOptions, { key: "seasons", label: "Seasons", component: () => null, icon: FaTv }] 
      : detailsOptions, 
    [type]
  );

  const handleClick = (option: DetailOption) => {
    setSelectedOption(option.key);
  };

  const renderContent = (): ContentResult => {
    switch(selectedOption) {
      case 'information':
        return { component: 'Information', props: { data, type } };
      case 'videos':
        return { component: 'Videos', props: { id: data.id, type } };
      case 'images':
        return { component: 'Images', props: { id: data.id, type } };
      case 'reviews':
        return { component: 'Reviews', props: { id: data.id, type } };
      case 'seasons':
        return { component: 'Season', props: { id: data.id, type } };
      default:
        return null;
    }
  };

  return {
    selectedOption,
    options,
    handleClick,
    renderContent,
    t
  };
};
