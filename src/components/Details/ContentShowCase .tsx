import React, { Suspense, lazy, useMemo } from "react"
import { useState } from "react"
import { IMovie } from "../../interfaces/IMovie"
import { detailsOptions } from "../../utils/filters"
import { LoadingSpinner } from "../../core/LoadingSpinner"
import { useTranslation } from "react-i18next"

// Lazy loading de componentes
const Season = lazy(() => import('./Season').then(module => ({ default: module.Season })))
const Information = lazy(() => import('./Information').then(module => ({ default: module.Information })))
const Videos = lazy(() => import('./Videos').then(module => ({ default: module.Videos })))
const Backdrops = lazy(() => import('./Backdrops').then(module => ({ default: module.Backdrops })))
const Reviews = lazy(() => import('./Reviews').then(module => ({ default: module.Reviews })))

interface DetailOption {
    key: string;
    label: string;
    component: React.ComponentType<{ prueba: IMovie }>;
}

type ContentShowcaseProps = {
    data: IMovie,
    type: "movie" | "tv"
}

export const ContentShowcase  = ({data, type}: ContentShowcaseProps) => {
const [selectedOption, setSelectedOption] = useState<any>('information')
const {t} = useTranslation();

const options: DetailOption[] = useMemo(() =>  type === "tv" 
? [...detailsOptions, {key: "seasons", label: "Seasons", component: Season}] 
: detailsOptions, [type])
if(!data) return null
console.log(data.id, "IDDD")


/*
El error dice Rendered more hooks than during the previous render y esto está relacionado con las reglas de los hooks. Antes tenia el if(!data) encima del useMemo y esto significa que en algunos renderizados el hook useMemo no se ejecutará (cuando data es null). En otros renderizados sí se ejecutará (cuando data tiene valor). React requiere que los hooks se ejecuten en el mismo orden y cantidad en cada renderizado

*/


const handleClick = (option: DetailOption) => {
    setSelectedOption(option.key)
}

return (
    <>
        <div className="flex flex-row items-center justify-center gap-2 border border-gray-700 max-w-2xl mx-auto mb-7">
            {
                options.map(option => (
                    <button 
                        onClick={() => handleClick(option)} 
                        className="px-6 py-2 rounded-full focus:underline" 
                        key={option.key}
                    >
                        {t(option.label)}
                    </button>
                ))
            }
        </div>
        <Suspense fallback={<LoadingSpinner />}>
        <div className="pb-10">
            {
                selectedOption === 'information' ?  <Information/> :
                selectedOption === 'videos' ? <Videos id={data.id} type={type}/> :
                selectedOption === 'images' ? <Backdrops/> :
                selectedOption === 'reviews' ? <Reviews/> :
                selectedOption === 'seasons' ? <Season/> :
                null
            }
            </div>
        </Suspense>
    </>
)
}

