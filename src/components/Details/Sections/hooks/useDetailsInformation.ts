import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCredits, useKeywords, useLanguages, useWatchProviders } from "../../../../hooks/useMovies";
import { IMovie } from "../../../../interfaces/IMovie";


interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
  display_priority?: number;
}
interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export const useDetailsInformation = (data: IMovie, type: string) => {
  const [providersResults, setProvidersResults] = useState<Provider[]>([]);
  const { t } = useTranslation();
  const { data: keywords } = useKeywords(type, data?.id);
  const { data: watchProviders } = useWatchProviders(type, data?.id);
  const { data: languages } = useLanguages();
  const { data: credits } = useCredits(
    type === "tv" ? `/tv/${data?.id}/aggregate_credits` : `/movie/${data?.id}/credits`
  );

  const title = type === 'tv' ? data?.name : type === 'movie' ? data?.title : '';

  const allKeywords = [
    ...(keywords?.results || []),
    ...(keywords?.keywords || [])
  ];

  const providers = [
    { provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg" },
    { provider_name: "Max", logo_path: "/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg" },
    { provider_name: "Apple TV+", logo_path: "/6uhKBfmtzFqOcLousHwZuzcrScK.jpg" },
    { provider_name: "Amazon Video", logo_path: "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg" },
    { provider_name: "Disney Plus", logo_path: "/6WzXs9WwbKXyYQY0Y8YZkRJ4Y8YZkRJ4.jpg" },
    { provider_name: "Movistar Plus+ Ficción Total ", logo_path: '/6WzXs9WwbKXyYQY0Y8YZkRJ4Y8YZkRJ4.jpg' }
  ];

  useEffect(() => {
    if (watchProviders) {
      const selectedProviders = watchProviders?.results?.ES?.flatrate?.filter(
        (provider: Provider) =>
          providers.map((p) => p.provider_name).includes(provider.provider_name)
      );
      setProvidersResults(selectedProviders || []);
    }
  }, [watchProviders]);

  const director = data?.credits?.crew?.filter((crew) => crew.job === "Director");
  const writer = data?.credits?.crew?.filter((crew) => crew.job === "Screenplay");
  const directorNames = director?.map((crew) => crew.name).join(", ");
  const writerNames = writer?.map((crew) => crew.name).join(", ");

  const actualLanguage = languages?.find((language: Language) => language.iso_639_1 === data?.original_language);

  return {
    providersResults,
    allKeywords,
    credits,
    directorNames,
    writerNames,
    actualLanguage,
    title,
    t
  };
};
