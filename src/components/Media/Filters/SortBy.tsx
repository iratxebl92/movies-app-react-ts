import { sortOptions } from "../../../utils/filters";
import OptionsSelect from "../../../core/OptionsSelect";

export const SortBy = () => {
      const sortOptionsLabel = sortOptions.map((option) => option.label);
  return (
    <>
      <p>Sort by</p>
      <OptionsSelect
        optionKey="sortBy"
        options={sortOptionsLabel}
        style={{}}
        value={sortOptions[0]}
        onOptionChange={(value: string, key: string) => {
          console.log(value, key);
        }}
      />
    </>
  );
};
