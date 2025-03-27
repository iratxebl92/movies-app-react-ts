import { usePersonInformation } from "../../hooks/useMovies";
import { ReadMore } from "../ReadMore";
import { useTranslation } from "react-i18next";
import { useMoviesStore } from "../../config/store/store";
import { useParams } from "react-router-dom";
import { SocialMedia } from "./SocialMedia";
import { useEffect, useState } from "react";
import { getBirthdayDate } from "../../utils/filters";


export const Information = () => {
  const {id} = useParams()
  const {language} = useMoviesStore()
  const {data, status} = usePersonInformation(id, language) 
  const {t} = useTranslation()

const gender = data?.gender === 1 ? t('female') : t('male')
  const biographyArray = data && data.biography.split('\n') || []
  const [date, setDate] = useState([])
  
  //TODO: Mirar con id 11669
  useEffect(() => {
    if (data?.birthday) {
      setDate(getBirthdayDate(data?.birthday));
    }
  }, [data]);

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
      <div className="grid grid-cols-3 mt-6">
        <div>
            <p className="font-bold">Known For</p>
            <p>{data?.known_for_department}</p>
        </div>
        <div>
            <p className="font-bold">Known Credits</p>
            <p>157</p>
        </div>
        <div>
            <p className="font-bold">Gender</p>
            <p>{gender} </p>
        </div>
        <div className="my-4">
            <p className="font-bold">Birthday</p>
            <p>{date.length ? date : "Sin información"}</p>
        </div>
        {
          data?.deathday &&
          <div className="my-4">
            <p className="font-bold">Day of Death</p>
            <p>November 11, 1974 (50 years old)</p>
        </div>       
        }
        <div className="my-4">
            <p className="font-bold">Place of Birth</p>
            <p>{data?.place_of_birth} </p>
        </div>
      </div>
      <div className="flex">
       <SocialMedia id={id}/>
      </div>
    </div>
  );
};
