import { useMoviesStore } from "../../../config/store/store";
import { usePersonSocialMedia } from "../../../hooks/useMovies";
import { socialMedia } from "../../../utils/filters";

export const useSocialMedia = (id: number) => {
  const { data } = usePersonSocialMedia(id);
  const { theme } = useMoviesStore();

  if (!data) {
    return null;
  }

  const filteredSocialMedia = socialMedia.filter(({ key }) => (data[key]));

  return {
    filteredSocialMedia,
    theme,
    data
  };
}; 