import { sortOptions } from "../../../utils/filters";
import OptionsSelect from "../../../core/OptionsSelect";
import { useEffect, useState } from "react";
import { useMoviesStore } from "../../../config/store/store";

export const SortBy = () => {
  const sortOptionsLabel = sortOptions.map((option) => option.label);
  const [selectedOption, setSelectedOption] = useState(sortOptionsLabel[0] ) //label solo
  const [optionCompleted, setOptionCompleted] = useState(sortOptions[0] ) // option completa con key y label
const {setFilterParams} = useMoviesStore()


  useEffect(() => {
     const completeOption = sortOptions.find((option: {key: string, label: string}) => option.label === selectedOption) 
     if(completeOption){
      setOptionCompleted(completeOption)
     }
    
  }, [selectedOption])
  
useEffect(() => {
  if(optionCompleted) {
    setFilterParams({sort_by: optionCompleted.key})

  }
}, [optionCompleted])

      
  const handleSortBy = (option:string) => {
        setSelectedOption(option)
      }

  return (
    <>
      <p>Sort by</p>
      <OptionsSelect

        options={sortOptionsLabel}
        style={{}}
        value={selectedOption}
        onOptionChange={(value:string) => {
          handleSortBy(value)
        }}
      />
    </>
  );
};
