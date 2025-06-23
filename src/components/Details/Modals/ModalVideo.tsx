import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactPlayer from "react-player";
import { IoMdClose } from "react-icons/io";
import { useModalVideo } from "./hooks/useModalVideo";

export const ModalVideo = ({selectedVideoKey}: {selectedVideoKey: string}) => {
  const {
    openVideoModal,
    setOpenVideoModal,
    videos,
    isWatchTrailerButton,
    prevDisabled,
    nextDisabled,
    handlePrev,
    handleNext,
    submitCloseButton
  } = useModalVideo(selectedVideoKey)

  return (
    <Transition appear show={openVideoModal} 
    as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-20"
        onClose={() => setOpenVideoModal(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-[80vw] max-h-[90vh] overflow-y-auto custom-scrollbar bg-black rounded-lg shadow-xl relative p-7">
            <button
              onClick={() => submitCloseButton()}
              className="absolute top-1 right-1 text-2xl font-bold text-gray-300 hover:cursor-pointer hover:text-gray-400"
              aria-label="Cerrar modal de video"
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
            {
              videos?.results && videos.results.length > 1 && !isWatchTrailerButton && (
                <>
                <button
                onClick={handlePrev}
                className={`absolute left-2 top-1/2 text-white text-3xl ${prevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={prevDisabled}
                aria-label="Video anterior"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className={`absolute right-2 top-1/2 text-white text-3xl ${nextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={nextDisabled}
                aria-label="Video siguiente"
              >
                →
              </button>
              </>
              )
            }
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

