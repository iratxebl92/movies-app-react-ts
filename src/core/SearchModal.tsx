import { Transition, Dialog, DialogPanel } from "@headlessui/react";
import { useMoviesStore } from "../config/store/store";
import { Fragment } from "react/jsx-runtime";
import { useSearch } from "../hooks/useMovies";
import { ChangeEvent, useState } from "react";
import { ISearch } from "../interfaces/ISearch";

export const SearchModal = () => {
  const { searchModal, setSearchModal, language } = useMoviesStore();
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useSearch(searchQuery, language);
  console.log(data?.results);
  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
          <DialogPanel className=" space-y-4 border bg-white p-12 z-20">
            <div className="w-full">
              <input
                type="search"
                placeholder={` Search movie, tv shos or people`}
                value={searchQuery}
                onChange={handleSearchQuery}
                className="w-full p-2 rounded-lg border border-gray-300"
             data-autofocus
              />
            </div>
            <div className="max-h-[40vh] overflow-auto  w-[400px]">
              {data && data.results.length > 0 ? (
                data.results.map((element: ISearch) => (
                  <div className="flex justify-between gap-4 mb-7 pr-7 items-start">
                    <div className="flex gap-4 items-start">
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
                        <p>{element.name ? element.name : element.title} </p>  
                        {
                          element.media_type === "person" ? (
                            <p> {element.known_for_department} </p>
                          ) : (
                            <p>{element.release_date ? element.release_date.slice(0,4) : element.first_air_date ? element.first_air_date.slice(0,4) : 'N/A'} </p>
                          )
                        }
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 border border-gray-300 rounded-lg px-2 py-1 w-16 text-center"> {element.media_type} </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No recent searches</p>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
