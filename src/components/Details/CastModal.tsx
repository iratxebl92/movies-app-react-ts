import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { useMoviesStore } from "../../config/store/store";
import { ICast } from '../../interfaces/ICast';
import { ICrew } from "../../interfaces/ICrew";

type CastModalProps = {
  castData: {
    cast: ICast[];
    crew: ICrew[];
  };
};

export const CastModal = ({ castData }: CastModalProps) => {
  const { cast, crew } = castData;
  const { openModal, setOpenModal } = useMoviesStore();

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpenModal(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 flex items-center justify-center p-4 " onClick={() => setOpenModal(false)}>
          <div className="max-w-4xl max-h-screen bg-white p-6 rounded-lg shadow-xl relative">

            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
            >
              <IoMdClose/>
            </button>

            <ul className="overflow-y-auto max-h-[calc(100vh-10rem)] mt-4 custom-scrollbar">
            <h2 className="text-lg font-bold">Cast</h2>
              {cast.map((person: ICast) => (
                <li key={person.id} className="flex flex-row justify-between mb-2 h-14 px-2 text-sm">
                  <div className="flex flex-row items-center">
                    <img
                      src={
                        person.profile_path
                          ? `https://www.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`
                          : person.gender === 1
                          ? '/images/girl-icon.png'
                          : '/images/boy-icon.png'
                      }
                      className="rounded-lg w-10 h-10 object-cover"
                      alt={person.name}
                      title={person.name}
                    />
                    <p className="ml-2">{person.name}</p>
                  </div>
                  <p className="content-center">{person.character}</p>
                </li>
              ))}
              <h2 className="text-lg font-bold mt-4">Crew</h2>
              {crew.map((person: ICrew) => (
                <li key={person.id} className="flex flex-row justify-between mb-2 h-14 px-2 text-sm">
                  <div className="flex flex-row items-center">
                    <img
                      src={
                        person.profile_path
                          ? `https://www.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`
                          : person.gender === 1
                          ? '/images/girl-icon.png'
                          : '/images/boy-icon.png'
                      }
                      className="rounded-lg w-10 h-10 object-cover"
                      alt={person.name}
                      title={person.name}
                    />
                    <p className="ml-2">{person.name}</p>
                  </div>
                  <p className="content-center" >{person.job}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
