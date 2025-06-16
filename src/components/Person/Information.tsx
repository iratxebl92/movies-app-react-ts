import { ReadMore } from "./ReadMore";
import { useTranslation } from "react-i18next";
import { SocialMedia } from "./SocialMedia";
import { formatDate } from "../../utils/filters";
import { InformationSkeleton } from "../Skeleton/Person/InformationSkeleton";
import { useInformation } from "./hooks/useInformation";

export const Information = () => {
  const { t, i18n } = useTranslation();
  const informationData = useInformation();
  const language = i18n.language;

  if (!informationData) return null;
  
  const { data, isLoading, showSkeleton, gender, biographyArray, id } = informationData;

  if (!data) return null;
  if (isLoading || showSkeleton) return <InformationSkeleton />;
  
  return (
    <div className="py-16">
      <h2 className="text-2xl md:text-4xl pb-4 font-semibold">{data?.name}</h2>
      <div>
        {biographyArray[0] === '' ? 
          <p>{t("notInformation")}</p>
          : 
          <ReadMore id="biography-text" text={biographyArray} />
        }
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 my-6 gap-6 md:gap-4">
        <div>
          <p className="font-bold">{t('knownFor')}</p>
          <p>{data?.known_for_department ? data?.known_for_department : '-'}</p>
        </div>
        <div>
          <p className="font-bold">{t('gender')}</p>
          <p>{gender ? gender : '-'}</p>
        </div>
        <div>
          <p className="font-bold">{t('birthday')}</p>
          <p>{data?.birthday ? formatDate(data.birthday, language) : "-"}</p>
        </div>
        {data?.deathday && (
          <div>
            <p className="font-bold">{t('deathDay')}</p>
            <p>{formatDate(data?.deathday, language)} {`(${Number(data?.deathday?.slice(0,4)) - Number(data?.birthday?.slice(0,4))} ${t("age")})`}</p>
          </div>
        )}
        <div>
          <p className="font-bold">{t('placeBirthday')}</p>
          <p>{data?.place_of_birth ? data?.place_of_birth : '-'}</p>
        </div>
      </div>
      <div className="flex">
        <SocialMedia id={id ? Number(id) : 0} />
      </div>
    </div>
  );
};
