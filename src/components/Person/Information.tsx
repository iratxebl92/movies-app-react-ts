import { usePersonInformation } from "../../hooks/useMovies";
import { ReadMore } from "../ReadMore";
import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useParams } from "react-router-dom";
import { SocialMedia } from "./SocialMedia";
import { formatDate } from "../../utils/filters";


export const Information = () => {
  const {id} = useParams()
  const {language} = useMoviesStore()
  const {data, status} = usePersonInformation(id, language) 

  const {t} = useTranslation()
  
  if(!data) return;
  const gender = data?.gender === 0 ? t("notSpecified") : data?.gender === 1 ? t("female") : t("male")

  const biographyArray = data && data.biography.split('\n') || []

  console.log(data)
  return (
    <div className="py-16">
      <h2 className="text-2xl md:text-4xl pb-4 font-semibold">{data?.name}</h2>
      <div>
      {
      biographyArray[0] === '' ? 
        <p>Sin información</p>
        : 
      (<ReadMore id="biography-text" text={biographyArray} />)
      }
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 my-6 gap-6 md:gap-4">
        <div>
            <p className="font-bold">{t('knownFor')}</p>
            <p>{data?.known_for_department}</p>
        </div>
        <div>
            <p className="font-bold">{t('gender')}</p>
            <p>{gender} </p>
        </div>
        <div>
            <p className="font-bold">{t('birthday')} </p>
            <p>{data?.birthday? formatDate(data.birthday, language) : "Sin información"}</p>
        </div>
        {
          data?.deathday &&
          <div>
            <p className="font-bold">{t('deathDay')} </p>
            <p> {formatDate(data?.deathday, language)} {`(${data?.deathday.slice(0,4) - data?.birthday.slice(0,4) } ${t("age")})`} </p>
        </div>       
        }
        <div>
            <p className="font-bold">{t('placeBirthday')} </p>
            <p>{data?.place_of_birth} </p>
        </div>
      </div>
      <div className="flex">
       <SocialMedia id={id}/>
      </div>
    </div>
  );
};
