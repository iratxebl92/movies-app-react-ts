import { GrDownload } from "react-icons/gr";
import OptionsSelect from "../../../core/OptionsSelect";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Counter } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { useTranslation } from "react-i18next";
import { ImagesSkeleton } from "../../Skeleton/ImagesSkeleton";
import { useImage } from "./hooks/useImage";
import { useState } from "react";

type ImageType = "backdrops" | "posters";
type ImageItem = {
  src: string;
  thumbnail: string;
};
export const Images = ({ id, type }: { id: number; type: string }) => {

  const { t } = useTranslation();
  const { 
    imagesType,
    imagesLocal,
    isLoading,
    isFetching,
    loading,
    handleDownload,
    lightboxIndex, 
    setLightboxIndex,
    handleOptionChange
  } = useImage(type, id);

  const imageTypeOptions: ImageType[] = ["backdrops", "posters"];

  if(loading || isLoading || isFetching) return <ImagesSkeleton/>

  return (
    <>
      {!imagesLocal.length ? (
        <div
          className="w-full h-full flex items-center justify-center min-h-[200px] "
          role="alert"
          aria-live="assertive"
        >
          <p className="text-2xl font-bold text-center text-neutral-500" aria-label={t("noImagesAvailable")}>
            {t("noImagesAvailable")}
          </p>
        </div>
      ) : (
        <>
          <OptionsSelect<ImageType>
            options={imageTypeOptions}
            style={{ width: "300px", marginLeft: "20px" }}
            value={imagesType as ImageType}
            onOptionChange={handleOptionChange as (option: ImageType) => void}
            getOptionLabel={(option) => option}
            getOptionValue={(option) => option}
          />
          <div className="p-6">
            <div className={`grid ${imagesType === "backdrops" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"} gap-5`}>
              {imagesLocal.slice(0, 20).map((img: ImageItem, idx: number) => (
                <div key={idx} className="relative group">
                  <img
                    src={img.thumbnail}
                    alt={imagesType === 'backdrops' ? `Backdrop de película` : `Póster de película`}
                    className={`rounded-xl cursor-pointer object-cover ${imagesType === "backdrops" ? "w-full h-60" : ""} transition-transform group-hover:scale-105 shadow-md`}
                    onClick={() => setLightboxIndex(idx)}
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(img.src);
                    }}
                    className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <GrDownload/>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {lightboxIndex !== null && (
        <Lightbox
          open={true}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
          slides={imagesLocal.map((img: ImageItem) => ({ src: img.src }))}
          plugins={[Fullscreen, Counter]}
        />
      )}
    </>
  );
};
