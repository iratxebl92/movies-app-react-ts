import { useEffect, useMemo, useState } from "react";
import { useMoviesStore } from "../../../config/store/store";
import { usePersonMovies } from "../../../hooks/useMovies";
import { useParams } from "react-router-dom";

export const useMediaGallery = () => {
  const { idAndName } = useParams() as { idAndName: string };
  const [id] = idAndName.split("-");
  const { personContentSelected, personContentOption } = useMoviesStore();
  const { data, isLoading } = usePersonMovies(personContentSelected, Number(id));
  const [visibleMovies, setVisibleMovies] = useState(20);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [departmentSelected, setDepartmentSelected] = useState('All');

  const idUnicos = new Set();
  const departments = (data?.crew ?? [])
    .filter((movie: { department: string }) => {
      if (idUnicos.has(movie.department)) return false;
      idUnicos.add(movie.department);
      return true;
    })
    .map((movie: { department: string }) => movie.department);

  const departmentsUnicos = ["Acting", ...departments];
  const optionDepartments = departmentsUnicos.length > 1 ? ["All", ...departmentsUnicos] : departmentsUnicos;

  const selectMovies: string[] = departmentSelected === 'Acting' 
    ? data?.cast 
    : departmentSelected === 'All' 
      ? [...(data?.cast ?? []), ...(data?.crew ?? [])] 
      : data?.crew.filter((movie: { department: string }) => movie.department === departmentSelected);

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