
import { useEffect, useState } from 'react';
import OptionsSelect from '../../../core/OptionsSelect';
import { useLanguages } from '../../../hooks/useMovies';
import { useMoviesStore } from '../../../config/store/store';

type Language = {
    english_name: string[];
  };
  

export const Language = () => {
  const { data: languages } = useLanguages();
  const languagesLabel =
  languages
  ?.map((language: Language) => language.english_name)
  .filter((language: string) => language !== "")
  .sort() || [];
  const [selectedLanguage, setSelectedLanguage] = useState(languagesLabel[0])
  const {setFilterParams} = useMoviesStore()

  const handleLanguage = (option:string) => {
    setSelectedLanguage(option)
  }
  useEffect(() => {
    if(languages){
      const completeLanguage = languages?.find((language: {iso_639_1: string, english_name:string}) => language.english_name === selectedLanguage) || ''
      setFilterParams({language: completeLanguage.iso_639_1})
      console.log(completeLanguage.iso_639_1, "completeLanguage")
    }
    
  }, [selectedLanguage]) 
  

  return (
    <>
     <p>Language</p>
        <OptionsSelect
          options={languagesLabel}
          style={{}}
          value={selectedLanguage}
          onOptionChange={(value: string) => {
            handleLanguage(value)
          }}
        />
    </>
  )
}
