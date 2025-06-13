import { Transition, Dialog, DialogPanel } from "@headlessui/react";
import { useMoviesStore } from "../config/store/store";
import { Fragment } from "react/jsx-runtime";
import { useSearch } from "../hooks/useMovies";
import { ChangeEvent, useEffect, useState } from "react";
import { ISearch } from "../interfaces/ISearch";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export const SearchModal = () => {
  const {
    searchModal,
    setSearchModal,
    language,
    searchHistory,
    setSearchHistory,
  } = useMoviesStore();
  const [recentSearch, setRecentSearch] = useState<ISearch[]>(searchHistory);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useSearch(searchQuery, language);

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
      const existingItem = searchHistory.find((el) => el.id === element.id)

      const updatedHistory = existingItem 
      ? searchHistory.filter((el) => el.id !== existingItem.id)
      : searchHistory;

      if(existingItem) updatedHistory.unshift(existingItem);
      setSearchHistory(updatedHistory)
    }
    setSearchModal(false);
     setSearchQuery("");
  };
  

  return (
    <Transition
      appear
      show={searchModal}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        open={searchModal}
        onClose={() => setSearchModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-600/65 z-1" />
          <div className="w-full flex items-center justify-center">
            <DialogPanel className="space-y-4 bg-white p-4 sm:p-6 md:p-8 lg:p-12 z-20 dark:bg-gray-600 rounded-3xl w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-md">
              <div className="w-full">
                <input
                  type="search"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={handleSearchQuery}
                  className="placeholder:text-xs sm:placeholder:text-sm w-full p-2 text-sm sm:text-base rounded-lg dark:bg-gray-400 dark:placeholder:text-white dark:placeholder:opacity-70 dark:text-white"
                  data-autofocus
                />
              </div>
              <div className="max-h-[40vh] overflow-auto w-full pt-7 scroll-thin">
                {data && data.results.length > 0 ? (
                  data.results.map((element: ISearch) => (
                    <div
                      className="flex justify-between gap-4  pr-7 items-center hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500 border-b-2 dark:border-gray-400"
                      onClick={() => handleClick(element)}
                    >
                      <div className="flex gap-4 items-start py-3">
                        <img
                          src={
                            element?.media_type === "person"
                              ? element.profile_path
                                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${element.profile_path}`
                                : "/images/profile-icon.png"
                              : element.poster_path
                              ? `https://www.themoviedb.org/t/p/w220_and_h330_face${element.poster_path}`
                              : "/images/image-icono.jpg"
                          }
                          className="w-16 min-w-18 h-28 min-h-28 rounded-lg object-cover content-center object-center"
                        />
                        <div>
                          <p className="font-semibold text-lg dark:text-white">
                            {element.name ? element.name : element.title}{" "}
                          </p>
                          {element.media_type === "person" ? (
                            <p className="dark:text-white text-[14px]">
                              {" "}
                              {element.known_for_department}{" "}
                            </p>
                          ) : (
                            <p className="dark:text-white text-[14px]">
                              {element.release_date
                                ? element.release_date.slice(0, 4)
                                : element.first_air_date
                                ? element.first_air_date.slice(0, 4)
                                : "N/A"}{" "}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <p
                          className={clsx(
                            "text-sm text-white rounded-lg px-2 py-1 w-16 text-center",
                            {
                              "dark:bg-violet-600 bg-violet-400":
                                element.media_type === "tv",
                              "dark:bg-blue-600 bg-blue-400":
                                element.media_type === "movie",
                              "dark:bg-green-600 bg-green-500":
                                element.media_type === "person",
                            }
                          )}
                        >
                          {" "}
                          {element.media_type}{" "}
                        </p>
                      </div>
                    </div>
                  ))
                ) : searchHistory.length > 0 ? (
                    <div>
                      <div className="flex justify-between">
                        <p className="dark:text-white text-lg font-semibold">Recent</p>
                        <button className="text-red-500 font-semibold mr-2 text-sm hover:text-red-400" onClick={() => setSearchHistory([])}>Clear</button>
                      </div>
                  {searchHistory.slice(0, 5).map((element: ISearch) => (
                    <div
                      className="flex justify-between gap-4  pr-7 items-center hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500 border-b-2 dark:border-gray-400"
                      onClick={() => handleClick(element)}
                    >
                      <div className="flex gap-4 items-start py-3">
                        <img
                          src={
                            element?.media_type === "person"
                              ? element.profile_path
                                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${element.profile_path}`
                                : "/images/profile-icon.png"
                              : element.poster_path
                              ? `https://www.themoviedb.org/t/p/w220_and_h330_face${element.poster_path}`
                              : "/images/image-icono.jpg"
                          }
                          className="w-16 min-w-18 h-28 min-h-28 rounded-lg object-cover content-center object-center"
                        />
                        <div>
                          <p className="font-semibold text-lg dark:text-white">
                            {element.name ? element.name : element.title}{" "}
                          </p>
                          {element.media_type === "person" ? (
                            <p className="dark:text-white text-[14px]">
                              {" "}
                              {element.known_for_department}{" "}
                            </p>
                          ) : (
                            <p className="dark:text-white text-[14px]">
                              {element.release_date
                                ? element.release_date.slice(0, 4)
                                : element.first_air_date
                                ? element.first_air_date.slice(0, 4)
                                : "N/A"}{" "}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <p
                          className={clsx(
                            "text-sm text-white rounded-lg px-2 py-1 w-16 text-center",
                            {
                              "dark:bg-violet-600 bg-violet-400":
                                element.media_type === "tv",
                              "dark:bg-blue-600 bg-blue-400":
                                element.media_type === "movie",
                              "dark:bg-green-600 bg-green-500":
                                element.media_type === "person",
                            }
                          )}
                        >
                          {" "}
                          {element.media_type}{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                  </div>
                ) : (
                  <p className="text-center dark:text-white dark:text-opacity-70">
                    {t("searchNotResults")}
                  </p>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
