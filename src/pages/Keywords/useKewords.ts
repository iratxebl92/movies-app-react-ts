import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useParams } from "react-router-dom";
import { useContentKeywords } from "../../hooks/useMovies";

type urlParamsType = {
  idAndName: string;
  type: "movie" | "tv";
};

export const useKewords = () => {
  const { keywordsOption, keywordsSelected, language } = useMoviesStore();
  const { t } = useTranslation();
  const { idAndName } = useParams<urlParamsType>(); // ${id}-${name.replace(/\s+/g, "-")}

  if (!idAndName) return null;

  const [id, ...rest] = idAndName.split("-") || [];
  const name = rest.join(" ");
  if (!id) return null;
  const { data, isLoading, isError } = useContentKeywords(
    keywordsSelected,
    id,
    language
  );

  const results = data?.results;
  const options =
    language === "es" ? ["Películas", "Tv Show"] : ["Movies", "Tv Show"];

  const selectedIndex = keywordsSelected === "movie" ? 0 : 1;

  const onTabChange = (tab: string) => {
    keywordsOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
  };

  return {
    t,
    name,
    isLoading,
    isError,
    results,
    options,
    selectedIndex,
    onTabChange,
  };
};
