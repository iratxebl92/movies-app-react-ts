import { Information } from "../components/Person/Information"
import { Photos } from "../components/Person/Photos"
import { MediaGallery } from "../components/Person/MediaGallery"


export const Person = () => {
  return (
    <div className="max-w-1920 mx-10 mb-2">
      <Information />
      <Photos />
      <MediaGallery />
    </div>
  )
}

