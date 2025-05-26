
import OptionsSelect from '../../../core/OptionsSelect';
import { useLanguages } from '../../../hooks/useMovies';

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
  return (
    <>
     <p>Language</p>
        <OptionsSelect
          optionKey="language"
          options={languagesLabel}
          style={{}}
          value={languagesLabel[0]}
          onOptionChange={(value: string, key: string) => {
            console.log(value, key);
          }}
        />
    </>
  )
}
