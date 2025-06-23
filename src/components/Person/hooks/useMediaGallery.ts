import { useEffect, useMemo, useState } from "react";
import { useMoviesStore } from "../../../config/store/store";
import { usePersonMovies } from "../../../hooks/useMovies";
import { useParams } from "react-router-dom";
import { IMovie } from '../../../interfaces/IMovie';

export const useMediaGallery = () => {
  const { idAndName } = useParams() as { idAndName: string };
  const [id] = idAndName.split("-");
  const { personContentSelected, personContentOption } = useMoviesStore();
  const { data, isLoading } = usePersonMovies(personContentSelected, Number(id));
  const [visibleMovies, setVisibleMovies] = useState(20);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [departmentSelected, setDepartmentSelected] = useState('All');

  const castDepartments = data?.cast?.map((movie: IMovie & { department?: string }) => movie.department).filter(Boolean) ?? [];
  const crewDepartments = data?.crew?.map((movie: IMovie & { department?: string }) => movie.department).filter(Boolean) ?? [];
  const allDepartments = Array.from(new Set(["Acting", ...castDepartments, ...crewDepartments].filter(Boolean)));
  const optionDepartments = allDepartments.length > 1 ? ["All", ...allDepartments] : allDepartments;

  const removeDuplicatesById = (movies: IMovie[]): IMovie[] => {
    const seen = new Set<number>();
    return movies.filter(movie => {
      if (seen.has(movie.id)) return false;
      seen.add(movie.id);
      return true;
    });
  };

  const sortByPopularity = (movies: IMovie[]) =>
    movies.slice().sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0));

  const selectMovies: IMovie[] = departmentSelected === 'All'
    ? sortByPopularity(removeDuplicatesById([...(data?.cast ?? []), ...(data?.crew ?? [])]))
    : departmentSelected === 'Acting'
      ? sortByPopularity(data?.cast ?? [])
      : sortByPopularity(data?.crew?.filter((movie: IMovie & { department?: string }) => movie.department === departmentSelected) ?? []);

  const disabled = useMemo(() => visibleMovies >= selectMovies?.length - 20, [visibleMovies, selectMovies?.length]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isLoading]);

  const onTabChange = (tab: string) => {
    personContentOption(
      tab === "Películas" || tab === "Movies" ? "movie" : "tv"
    );
  };

  const selectedIndex = personContentSelected === "movie" ? 0 : 1;

  const onDepartmentOptionChange = (option: string) => {
    setDepartmentSelected(option);
  };

  return {
    isLoading,
    showSkeleton,
    data,
    selectMovies,
    visibleMovies,
    setVisibleMovies,
    disabled,
    optionDepartments,
    departmentSelected,
    selectedIndex,
    onTabChange,
    onDepartmentOptionChange
  };
}; 