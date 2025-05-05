
import { Information } from "./Information";
import { MediaGallery } from "./MediaGallery";
import { Photos } from "./Photos";

export const Person = () => {

  return (
    <div className="max-w-1920 mx-10">
      <Information />
      <Photos />
      <MediaGallery />
    </div>
  );
};
