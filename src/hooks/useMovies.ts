import { useQuery, keepPreviousData } from "@tanstack/react-query";
import apiClient from "../services/apiClient";



export const useTrendingMovies = (content: string, language: string) => {

//content es movie o tv
  return useQuery({
    queryKey: ["trendingMovies", content, language],
    queryFn: () => apiClient.findTrendingMovies( content, language),
  });
};

export const useTopRatedMovies = (content: string, language: string) => {
  return useQuery({
    queryKey: ["topRatedMovies", content, language],
    queryFn: () => apiClient.findTopRated(content, language),
  });
};

export const usePopularMovies = (content: string, language: string) => {
  return useQuery({
    queryKey: ["popularMovies", content, language],
    queryFn: () => apiClient.findPopular(content, language),
  });
}
export const useDetailsAndCast = (content: string, id: number, language: string) => {

  return useQuery({
    queryKey: ["detailsAndCast", content, id, language], // Clave única para caché
    queryFn: () => apiClient.findDetailsAndCast(content, id, language), // Llamada combinada
  });
};
export const useImages = (content: string, id: number) => {
  return useQuery({
    queryKey: ["images", content, id],
    queryFn: () => apiClient.findImages(content, id),
  });
}

export const usePersonMovies = (content: string, id: number) => {
  return useQuery({
    queryKey: ["personMovies", content, id],
    queryFn: () => apiClient.findPersonContent(content, id),
  });
}
export const usePersonImages = ( id: number) => {
  return useQuery({
    queryKey: ["personImages",  id],
    queryFn: () => apiClient.findPersonImages(id),
  });
}
export const usePersonInformation = ( id: number, language: string) => {
  return useQuery({
    queryKey: ["personInformation",  id, language],
    queryFn: () => apiClient.findPersonInformation(id, language),
  });
}

export const usePersonSocialMedia = ( id: number) => {
  return useQuery({
    queryKey: ["personSocialMedia",  id],
    queryFn: () => apiClient.findPersonSocialMedia(id),
  });
}

export const useVideos = (content:string, id: number) => {
  return useQuery({
    queryKey: ["videos", content, id],
    queryFn: () => apiClient.findVideos(content, id),
  });
}

export const useKeywords = (content:string, id: number) => {
  return useQuery({
    queryKey: ["keywords", content, id],
    queryFn: () => apiClient.findKeywords(content, id),
  });
}
export const useContentKeywords = (content:string, id: string) => {
  return useQuery({
    queryKey: ["contentKeywords", content, id],
    queryFn: () => apiClient.findContentKeywords(content, id),
  });
}
export const useMovies = (content:string, language: string, page: number) => {
  return useQuery({
    queryKey: ["movies", content, language, page],
    queryFn: () => apiClient.findMovies(content, language, page),
    placeholderData: keepPreviousData, // mantiene datos anteriores mientras carga los nuevos
    staleTime: 5000,
  });
}

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ["upcoming"],
    queryFn: () => apiClient.findUpComingMovies(),
  });
}
export const useGenresList = (content: string) => {
  return useQuery({
    queryKey: ["genresList"],
    queryFn: () => apiClient.findGenresList(content),
  });
}
export const useReviews = (content: string, id: number) => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () => apiClient.findReviews(content, id),
  });
}
export const useWatchProviders = (content: string, id: number) => {
  return useQuery({
    queryKey: ["watchProviders"],
    queryFn: () => apiClient.findWatchProviders(content, id),
  });
}




/*
La queryKey es como el "ID" de los datos que estás pidiendo. React Query la usa para:

Saber si ya tiene esos datos en caché.

Decidir si necesita hacer una nueva petición o no.

Controlar actualizaciones, revalidaciones, etc.


Cada vez que page cambia (por ejemplo, al hacer setPage(prev => prev + 1)):

React vuelve a renderizar tu componente.

En esa nueva renderización, useQuery se ejecuta de nuevo.

Como la queryKey ahora es diferente (por ejemplo, ["movies", "es", 2] en vez de ["movies", "es", 1]), React Query la considera una query nueva.

Como esa combinación no está en caché, React Query dispara queryFn (tu apiClient.findMovies(...)) para traer los datos de esa página.
*/