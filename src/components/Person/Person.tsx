import { useMoviesStore } from "../../config/store/store";
import { SortSelector } from "../SortSelector";
import { SwitchTab } from "../SwitchTab";
import { Information } from "./Information";
import { MediaGallery } from "./MediaGallery";
import { Photos } from "./Photos";
import { sortDepartaments, sortOptions } from "../../utils/filters";

export const Person = () => {
  const { personContentOption } = useMoviesStore();

  const onTabChange = (tab: string) => {
    personContentOption(
      tab === "Películas" || tab === "Movies" ? "movie" : "tv"
    );
  };

  return (
    <div className="max-w-1920 mx-10">
      <Information />
      <Photos />
      <SwitchTab
        options={["Movies", "Tv Show"]}
        onTabChange={onTabChange}
        className="flex justify-center py-10"
      />
      <div className="flex justify-end">
        <SortSelector options={sortDepartaments} />
        <SortSelector options={sortOptions} />
      </div>
      <MediaGallery />
    </div>
  );
};
