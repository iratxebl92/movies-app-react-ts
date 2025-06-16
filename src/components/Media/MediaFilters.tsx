
import { UserRange } from "./Filters/UserRange";
import { UserVotesRange } from "./Filters/UserVotesRange";
import { RuntimesRange } from "./Filters/RuntimesRange";
import { GenreList } from "./Filters/GenreList";
import { SortBy } from "./Filters/SortBy";
import { ReleaseData } from "./Filters/ReleaseData";

import { Language } from "./Filters/Language";

export const MediaFilters = () => {



    // crear un useEfect y probar a actualizar cada vez que cambie alguna de las propiedades, haciendo que coincida la que cambie y las otras manteniendolas igual.

  return (
    <div className="h-auto border-2 border-gray-500 w-full pb-36">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Filters</p>
        <button className="bg-gray-500 border-2 border-gray-500 rounded-md p-2">
          Clear All
        </button>
      </div>
      <div>
        <SortBy/>
      </div>
      <div>
        <Language/>
      </div>
      <div>
       
      </div>
      <div>
      <ReleaseData/>
      </div>
      <div className="mt-10">
        <UserRange />
      </div>
      <div className="mt-10">
        <UserVotesRange />
      </div>
      <div className="mt-10">
        <RuntimesRange />
      </div>

      <div className="mt-10">
        <GenreList/>
      </div>
    </div>
  );
};
