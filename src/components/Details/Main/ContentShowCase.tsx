import React, { Suspense, lazy } from "react"
import { LoadingSpinner } from "../../../core/LoadingSpinner"
import { AnimatePresence, motion } from 'framer-motion';
import { useContentShowCase } from "./hooks/useContentShowCase";
import * as Types from "../../../interfaces/IContentShowCase";

// Lazy loading de componentes para mejorar el rendimiento inicial
const Season = lazy(() => import('../Sections/Season').then(module => ({ default: module.Season })))
const Information = lazy(() => import('../Sections/DetailsInformation').then(module => ({ default: module.DetailsInformation })))
const Videos = lazy(() => import('../Sections/Videos').then(module => ({ default: module.Videos })))
const Images = lazy(() => import('../Sections/Images').then(module => ({ default: module.Images })))
const Reviews = lazy(() => import('../Sections/Reviews').then(module => ({ default: module.Reviews })))




export const ContentShowcase = ({data, type}: Types.ContentShowcaseProps) => {
    const { selectedOption, options, handleClick, renderContent, t } = useContentShowCase({ data, type });

    if(!data) return null;

    const content = renderContent();
    let Component: React.ComponentType<any> | null = null;

    if (content) {
        switch(content.component) {
            case 'Information':
                Component = Information;
                break;
            case 'Videos':
                Component = Videos;
                break;
            case 'Images':
                Component = Images;
                break;
            case 'Reviews':
                Component = Reviews;
                break;
            case 'Season':
                Component = Season;
                break;
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
                  aria-label={`Pestaña ${t(option.label)}`}
                >   
                  <option.icon />
                  <span className="hidden md:block">
                    {t(option.label)}
                  </span>
                </button>
                ))}
            </div>

            {/* Contenedor del contenido con altura mínima para evitar saltos */}
            <div className="min-h-[300px] flex justify-center">
                {/* Suspense para manejar la carga de componentes lazy */}
                <Suspense fallback={<LoadingSpinner />}>
                    {/* AnimatePresence maneja las animaciones de entrada/salida */}
                    <AnimatePresence mode="wait">
                        {/* motion.div aplica las animaciones al contenido */}
                        <motion.div
                            key={selectedOption}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            id={selectedOption === 'reviews' ? 'reviews' : undefined}
                            className="w-full"
                        >
                            {Component && content && <Component {...content.props} />}
                        </motion.div>
                    </AnimatePresence>
                </Suspense>
            </div>
        </div>
    )
}

