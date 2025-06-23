import { useState, useEffect } from "react";
import { useImages } from "../../../../hooks/useMovies";
import axios from "axios";
import { IBackdrops } from "../../../../interfaces/IBackdrops";

export const useImage = (type: string, id: number) => {
  const [imagesType, setImagesType] = useState<string>("backdrops");
  const { data: images, isLoading, isFetching } = useImages(type, id);
  const [selectedImages, setSelectedImages] = useState<any>(images?.backdrops);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (!images) return;
    if (imagesType === "backdrops") {
      setSelectedImages(images.backdrops);
    } else {
      setSelectedImages(images.posters);
    }
  }, [imagesType, images]);

  const handleOptionChange = (option: string) => {
    setImagesType(option);
  };

  const imagesLocal = (selectedImages || []).map((element: IBackdrops) => ({
    src: `https://www.themoviedb.org/t/p/original/${element.file_path}`,
    thumbnail: `https://www.themoviedb.org/t/p/w300/${element.file_path}`,
  }));
  
  const toDataURL = async (url: string) => {
    try {
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
      window.open(url, '_blank');
      return null;
    }
  };

  const handleDownload = async (url: string) => {
    try {
      const filename = url.split('/').pop() || "image.jpg";
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed, trying backup method:", error);
      
      try {
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

  return {
    imagesType,
    imagesLocal,
    isLoading,
    isFetching,
    handleOptionChange,
    loading,
    handleDownload,
    lightboxIndex, 
    setLightboxIndex
  };
};
  