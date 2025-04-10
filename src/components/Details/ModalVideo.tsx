import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactPlayer from "react-player";
import { useMoviesStore } from "../../config/store/store";
import { IoMdClose } from "react-icons/io";

export const ModalVideo = ({ selectedVideoKey}: {selectedVideoKey: string}) => {
  const { openVideoModal, setOpenVideoModal } = useMoviesStore();
  console.log(selectedVideoKey);
  return (
    <Transition appear show={openVideoModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setOpenVideoModal(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-[80vw] max-h-[90vh] overflow-y-auto custom-scrollbar bg-black rounded-lg shadow-xl relative p-7">
            <button
              onClick={() => setOpenVideoModal(false)}
              className="absolute top-1 right-1 text-2xl font-bold text-gray-500 hover:text-gray-800"
            >
              <IoMdClose />
            </button>
            <div className="relative w-auto h-[587px] inset-0 bg-black">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${selectedVideoKey}`}
                controls
                className="!w-full !h-full"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
