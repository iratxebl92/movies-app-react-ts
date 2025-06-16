import { useMoviesStore } from "../../config/store/store";
import { useSearch } from "../../hooks/useMovies";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { ISearch } from "../../interfaces/ISearch";
import { useNavigate } from "react-router-dom";

export const useSearchModal = () => {
  const {
    searchModal,
    setSearchModal,
    language,
    searchHistory,
    setSearchHistory,
  } = useMoviesStore();

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useSearch(searchQuery, language);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchModal]);

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  function checkRecentSearchElement(arr: ISearch[], val: ISearch) {
    return arr.some(
      (item) => item.id === val.id && item.media_type === val.media_type
    );
  }

  const handleClick = (element: ISearch) => {
    element.media_type === "movie"
      ? navigate(
          `/details/${element.media_type}/${element.id}-${element.title.replace(
            /\s+/g,
            "-"
          )}`
        )
      : element.media_type === "tv"
      ? navigate(
          `/details/${element.media_type}/${element.id}-${element.name.replace(
            /\s+/g,
            "-"
          )}`
        )
      : navigate(`/person/${element.id}-${element.name.replace(/\s+/g, "-")}`);

    const checking = checkRecentSearchElement(searchHistory, element);

    if (!checking) {
      setSearchHistory([...searchHistory, element]);
    } else {
      const existingItem = searchHistory.find((el) => el.id === element.id);
      const updatedHistory = existingItem 
        ? searchHistory.filter((el) => el.id !== existingItem.id)
        : searchHistory;

      if(existingItem) updatedHistory.unshift(existingItem);
      setSearchHistory(updatedHistory);
    }
    setSearchModal(false);
    setSearchQuery("");
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return {
    searchModal,
    setSearchModal,
    searchQuery,
    handleSearchQuery,
    data,
    inputRef,
    handleClick,
    searchHistory,
    clearSearchHistory
  };
};
