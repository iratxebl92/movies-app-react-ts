import { useTranslation } from "react-i18next"
import { useRecommendations } from "../../hooks/useMovies"
import { Card } from "../Card"

export const Recommendations = ({id, type, language}: {id: number, type: string, language: string}) => {

  const {t} = useTranslation()

    const {data: recommendations} = useRecommendations(type, id, language)
  return (
    <div>
        <h2 className="text-2xl font-bold my-10 text-start">{t('recommendations')}</h2>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-8">
            {recommendations?.results?.map((recommendation: {id: number, title: string, poster_path: string}) => (
                <Card key={recommendation.id} movie={recommendation} className="max-w-64" />  
            ))}
        </div>
    </div>
  )
}

//flex flex-wrap gap-8 content-center justify-center