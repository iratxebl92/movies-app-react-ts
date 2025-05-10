import React, { Suspense, lazy, useMemo, useEffect } from "react"
import { useState } from "react"
import { IMovie } from "../../interfaces/IMovie"
import { detailsOptions } from "../../utils/filters"
import { LoadingSpinner } from "../../core/LoadingSpinner"
import { useTranslation } from "react-i18next"
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

// Lazy loading de componentes para mejorar el rendimiento inicial
// Cada componente se cargará solo cuando sea necesario
const Season = lazy(() => import('./Season').then(module => ({ default: module.Season })))
const Information = lazy(() => import('./DetailsInformation').then(module => ({ default: module.DetailsInformation })))
const Videos = lazy(() => import('./Videos').then(module => ({ default: module.Videos })))
const Backdrops = lazy(() => import('./Backdrops').then(module => ({ default: module.Backdrops })))
const Reviews = lazy(() => import('./Reviews').then(module => ({ default: module.Reviews })))

// Interfaz que define la estructura de cada opción en el menú de pestañas
interface DetailOption {
    key: string;
    label: string;
    component: React.ComponentType<{ prueba: IMovie }>;
}

// Props que recibe el componente
type ContentShowcaseProps = {
    data: IMovie,
    type: "movie" | "tv"
}

export const ContentShowcase = ({data, type}: ContentShowcaseProps) => {
    // Estado para controlar qué pestaña está seleccionada
    const [selectedOption, setSelectedOption] = useState<any>('reviews')
    const {t} = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash === 'reviews') {
            setSelectedOption('reviews');
        }
    }, [location]);

    // Memorizamos las opciones para evitar recálculos innecesarios
    // Si es tipo "tv", añadimos la opción de temporadas
    const options: DetailOption[] = useMemo(() =>  type === "tv" 
        ? [...detailsOptions, {key: "seasons", label: "Seasons", component: Season}] 
        : detailsOptions, [type])

    if(!data) return null

    // Manejador del clic en las pestañas
    const handleClick = (option: DetailOption) => {
        setSelectedOption(option.key)
    }

    // Función que renderiza el contenido según la pestaña seleccionada
    // Esto hace el código más limpio y fácil de mantener
    const renderContent = () => {
        switch(selectedOption) {
            case 'information':
                return <Information data={data} type={type} />;
            case 'videos':
                return <Videos id={data.id} type={type}/>;
            case 'images':
                return <Backdrops/>;
            case 'reviews':
                return <Reviews id={data.id} type={type} />;
            case 'seasons':
                return <Season/>;
            default:
                return null;
        }
    }

    return (
        <div className="flex flex-col">
            {/* Barra de navegación con las pestañas */}
            <div className="min-h-max flex flex-row items-center justify-center gap-2 border border-gray-700 max-w-2xl mx-auto mb-7">
                {options.map(option => (
                    <button 
                        onClick={() => handleClick(option)} 
                        className="px-6 py-2 rounded-full focus:underline" 
                        key={option.key}
                    >
                        {t(option.label)}
                    </button>
                ))}
            </div>

            {/* Contenedor del contenido con altura mínima para evitar saltos */}
            <div className="min-h-[600px] m-auto px-8 md:px-24">
                {/* Suspense para manejar la carga de componentes lazy */}
                <Suspense fallback={<LoadingSpinner />}>
                    {/* AnimatePresence maneja las animaciones de entrada/salida */}
                    <AnimatePresence mode="wait">
                        {/* motion.div aplica las animaciones al contenido */}
                        <motion.div
                            key={selectedOption} // La key es importante para que React sepa cuándo re-renderizar
                            initial={{ opacity: 0, x: 20 }} // Estado inicial: invisible y 20px abajo
                            animate={{ opacity: 1, x: 0 }} // Estado final: visible y en posición
                            exit={{ opacity: 0, x: -20 }} // Estado de salida: invisible y 20px arriba
                            transition={{ duration: 0.3, ease: "easeInOut" }} // Configuración de la transición
                            // Añadimos un ID dinámico al contenedor cuando estamos en la sección de reseñas
                            // Esto permite que el scroll funcione correctamente cuando se accede con #reviews en la URL
                            id={selectedOption === 'reviews' ? 'reviews' : undefined}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </Suspense>
            </div>
        </div>
    )
}

