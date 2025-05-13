import { useEffect, useState } from "react";

import { useImages } from "../../hooks/useMovies";
import OptionsSelect from "../OptionsSelect";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Counter } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export const Images = ({ id, type }: { id: number; type: string }) => {
  const [imagesType, setImagesType] = useState<string>("backdrops");
  const { data: images } = useImages(type, id);
  const backdrops = images?.backdrops || undefined;
  const posters = images?.posters || undefined;
  const options = ["backdrops", "posters"];
  const [selectedImages, setSelectedImages] = useState<any>(backdrops);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOptionChange = (option: string) => {
    setImagesType(option);
  };

  useEffect(() => {
    if (!images) return;
    if (imagesType === "backdrops") {
      setSelectedImages(backdrops);
    } else {
      setSelectedImages(posters);
    }
  }, [imagesType, backdrops, posters]);

  if (!images) return null;

  const imagesLocal = (selectedImages || []).map((element: any) => ({
    src: `https://www.themoviedb.org/t/p/original/${element.file_path}`,
    thumbnail: `https://www.themoviedb.org/t/p/w300/${element.file_path}`,
  }));

  return (
    <>
      <OptionsSelect
        options={options}
        style={{ width: "300px", marginLeft: "20px" }}
        onOptionChange={handleOptionChange}
      />
      <div className="p-6">
        <div className={`grid ${imagesType === "backdrops" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"} gap-5`}>
          {imagesLocal.slice(0, 20).map((img: any, idx: any) => (
            <img
              key={img.src}
              src={img.thumbnail}
              alt=""
              className={`rounded-xl cursor-pointer object-cover ${imagesType === "backdrops" ? "w-full h-60" : ""} transition-transform hover:scale-105 shadow-md`}
              onClick={() => setLightboxIndex(idx)}
            />
          ))}
        </div>
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          open={true}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
          slides={imagesLocal.map((img: any) => ({ src: img.src }))}
          plugins={[Fullscreen, Counter]}
        />
      )}
    </>
  );
};
