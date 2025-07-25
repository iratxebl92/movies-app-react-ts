import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Counter } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { useMoviesStore } from "../../../config/store/store";

// Tipos
type Backdrop = {
  file_path: string;
};
type GalleryImage = {
  src: string;
  width: number;
  height: number;
  thumbnail: string;
};

export const BackdropModal = ({ backdrops }: { backdrops: Backdrop[] }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { openBackdropModal, setOpenBackdropModal } = useMoviesStore();

  // Convertir imágenes al formato de react-grid-gallery
  const images: GalleryImage[] = backdrops.map((element) => ({
    src: `https://www.themoviedb.org/t/p/original/${element.file_path}`,
    width: 1920,
    height: 1080,
    thumbnail: `https://www.themoviedb.org/t/p/w300/${element.file_path}`,
  }));

  return (
    <Transition appear show={openBackdropModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setOpenBackdropModal(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-[80vw] max-h-[90vh] overflow-y-auto custom-scrollbar bg-white  rounded-lg shadow-xl relative p-7">
            <button
              onClick={() => setOpenBackdropModal(false)}
              className="absolute top-1 right-1 text-2xl font-bold text-gray-500 hover:text-gray-800"
              aria-label="Cerrar modal de imágenes"
            >
              <IoMdClose />
            </button>

            <Gallery
              images={images}
              enableImageSelection={false}
              onClick={(index) => setLightboxIndex(index)}
            />

            {/* Lightbox para ver imágenes en grande */}
            {lightboxIndex !== null && (
              <Lightbox
                open={true}
                close={() => setLightboxIndex(null)}
                index={lightboxIndex}
                slides={images.map((img) => ({ src: img.src }))}
                plugins={[Fullscreen, Counter]}
              />
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
