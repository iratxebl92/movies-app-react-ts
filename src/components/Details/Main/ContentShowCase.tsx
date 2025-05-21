import React, { Suspense, lazy, useMemo, useEffect } from "react"
import { useState } from "react"
import { IMovie } from "../../../interfaces/IMovie"
import { detailsOptions } from "../../../utils/filters"
import { LoadingSpinner } from "../../../core/LoadingSpinner"
import { useTranslation } from "react-i18next"
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { FaTv } from "react-icons/fa";


// Lazy loading de componentes para mejorar el rendimiento inicial
// Cada componente se cargará solo cuando sea necesario
const Season = lazy(() => import('../Sections/Season').then(module => ({ default: module.Season })))
const Information = lazy(() => import('../Sections/DetailsInformation').then(module => ({ default: module.DetailsInformation })))
const Videos = lazy(() => import('../Sections/Videos').then(module => ({ default: module.Videos })))
const Images = lazy(() => import('../Sections/Images').then(module => ({ default: module.Images })))
const Reviews = lazy(() => import('../Sections/Reviews').then(module => ({ default: module.Reviews })))

// Interfaz que define la estructura de cada opción en el menú de pestañas

//interface: Es una forma de definir la forma (shape) de un objeto, principalmente para objetos y clases.
//type: Es una forma más general de definir tipos, puede ser para objetos, uniones, primitivas, funciones, etc.

type MediaType = "movie" | "tv";

interface DetailsInformationProps  {
    data: IMovie;
    type: MediaType;
  };
interface DetailsOptionsProps  {
    id: number;
    type: MediaType;
}
type DetailOption =
  | {
      key: string;
      label: string;
      component: React.ComponentType<DetailsInformationProps>;
      icon: React.ElementType;
    }
  | {
      key: string;
      label: string;
      component: React.ComponentType<DetailsOptionsProps>;
      icon: React.ElementType;
    };

// Props que recibe el componente
type ContentShowcaseProps = {
    data: IMovie,
    type: "movie" | "tv"
}

export const ContentShowcase = ({data, type}: ContentShowcaseProps) => {
    // Estado para controlar qué pestaña está seleccionada
    const [selectedOption, setSelectedOption] = useState<any>('information')
    const {t} = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash === 'reviews') {
            setSelectedOption('reviews');
            setTimeout(() => {
                const reviewsSection = document.getElementById('reviews');
                if (reviewsSection) {
                    reviewsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    // Memorizamos las opciones para evitar recálculos innecesarios
    // Si es tipo "tv", añadimos la opción de temporadas
    const options: DetailOption[] = useMemo(() =>  type === "tv" 
        ? [...detailsOptions, {key: "seasons", label: "Seasons", component: Season, icon:FaTv}] 
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
                return <Images id={data.id} type={type}/>;
            case 'reviews':
                return <Reviews id={data.id} type={type} />;
            case 'seasons':
                return <Season id={data.id} type={type} />;
            default:
                return null;
        }
    }

    return (
        <div className="flex flex-col">
            {/* Barra de navegación con las pestañas */}
            <div className=" flex flex-row items-center justify-center gap-2 max-w-4xl md:mx-auto mb-7 h-16">
                {options.map(option => (
                  <button 
                  onClick={() => handleClick(option)} 
                  className={`px-6 py-2 flex flex-row items-center gap-2 md:gap-1.5 lg:gap-2 text-lg hover:opacity-100 relative md:px-2 lg:px-6
                    ${selectedOption === option.key
                      ? 'opacity-100 after:absolute after:content-[""] after:bg-violet-600 after:h-[2px] after:w-full after:left-0 after:bottom-0 after:rounded'
                      : 'opacity-60'}
                    `}
                  key={option.key}
                >   
                  <option.icon />
                  <span className="hidden md:block">

                  {t(option.label)}
                  </span>
                </button>
                ))}
            </div>

            {/* Contenedor del contenido con altura mínima para evitar saltos */}
            <div className="min-h-[300px] flex ">
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

