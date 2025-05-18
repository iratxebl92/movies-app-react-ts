import { useEffect, useState } from "react";
import { GrDownload } from "react-icons/gr";
import { useImages } from "../../hooks/useMovies";
import OptionsSelect from "../OptionsSelect";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Counter } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import axios from "axios";

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


  const toDataURL = async (url: string) => {
    try {
      /* Using Axios with specific headers to mitigate CORS issues */
      const response = await axios.get(url, { 
        responseType: "blob",
        headers: {
          'Origin': window.location.origin,
          'Referer': 'https://www.themoviedb.org/'
        }
      });
      
      const blob = response.data;
      const blobUrl = URL.createObjectURL(blob);
      return blobUrl;
    } catch (error) {
      console.error("Error downloading image:", error);
      // If direct download fails, try opening in new tab
      window.open(url, '_blank');
      return null;
    }
  };

  const handleDownload = async (url: string) => {
    try {
      // Get filename from the URL
      const filename = url.split('/').pop() || "image.jpg";
      
      // Try with proxy approach
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
      
      // Fetch through proxy
      const response = await fetch(proxyUrl);
      const blob = await response.blob();
      
      // Create object URL
      const blobUrl = URL.createObjectURL(blob);
      
      // Create download link
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed, trying backup method:", error);
      
      try {
        // Backup method - use local proxy if available
        const blobUrl = await toDataURL(url);
        if (blobUrl) {
          const filename = url.split('/').pop() || "image.jpg";
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        }
      } catch (err) {
        console.error("All download methods failed:", err);
        alert("No se pudo descargar la imagen. Se abrirá en una nueva pestaña.");
        window.open(url, '_blank');
      }
    }
  };
  return (
    <>
      <OptionsSelect
        options={options}
        style={{ width: "300px", marginLeft: "20px" }}
        value={imagesType}
        onOptionChange={handleOptionChange}
      />
      <div className="p-6">
        <div className={`grid ${imagesType === "backdrops" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"} gap-5`}>
          {imagesLocal.slice(0, 20).map((img: any, idx: any) => (
            <div key={idx} className="relative group">
              <img
                src={img.thumbnail}
                alt=""
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
