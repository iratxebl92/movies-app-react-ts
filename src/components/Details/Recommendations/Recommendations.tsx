import { useTranslation } from "react-i18next"
import { useRecommendations } from "../../../hooks/useMovies"
import { Card } from "../../../core/Card"
import { IMovie } from '../../../interfaces/IMovie'

export const Recommendations = ({id, type, language}: {id: string, type: string, language: string}) => {

  const {t} = useTranslation()

    const {data: recommendations} = useRecommendations(type, Number(id), language)
  return (
    <div>
        <h2 className="text-2xl font-bold my-10 text-start">{t('recommendations')}</h2>
        <div className="">
            { 
            (recommendations?.results?.length ?? 0) > 0 ?

            (<div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-8">

           { recommendations?.results?.map((recommendation: IMovie) => (
                <Card key={recommendation.id} movie={recommendation} className="max-w-64" />  

            ))}
              </div>
          )
            :
            <div className="flex justify-center items-center h-full min-h-[10vh]" aria-label={t('noRecommendations')}>
              <p className="text-2xl font-bold text-center text-neutral-500">{t('noRecommendations')}</p>
            </div>
            }
        </div>
    </div>
  )
}

