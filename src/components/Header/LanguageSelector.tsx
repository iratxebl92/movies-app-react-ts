import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useMoviesStore } from '../../config/store/store';
import { useTranslation } from 'react-i18next';
import { HiLanguage } from "react-icons/hi2";

// Definición de los idiomas disponibles en la aplicación
const languages = [
  { name: 'ES', value: 'es' },
  { name: 'EN', value: 'en' },
] as const;

// Tipo TypeScript que representa un idioma del array languages
type Language = typeof languages[number];

export default function LanguageSelector() {

  const { language, setLanguage } = useMoviesStore();
  
  const { i18n } = useTranslation();
  
  // Encontramos el idioma actual en el array de idiomas disponibles
  // Si no se encuentra, usamos el primero como valor por defecto
  const currentLanguage = languages.find(lang => lang.value === language) || languages[0];

  // Función que maneja el cambio de idioma
  // Actualiza tanto el store global como la configuración de i18n
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage.value);
    i18n.changeLanguage(newLanguage.value);
  };

  return (

    <div className="w-20">

      <Listbox value={currentLanguage} onChange={handleLanguageChange}>
        <div className="relative">
          <ListboxButton className=" cursor-pointer rounded-lg pl-3 pr-10  text-sm dark:text-white">
          <HiLanguage/>
            {/* <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span> */}
          </ListboxButton>

          {/* Transición suave para la apertura/cierre del menú desplegable */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Lista de opciones de idiomas */}
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
           
              {languages.map((language) => (
                <ListboxOption
                  key={language.value}
                  className="relative cursor-pointer select-none py-2 pl-10 pr-4 ui-active:bg-gray-700 ui-active:text-white ui-not-active:text-gray-300"
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate text-white hover:text-stone-300 ${selected ? 'font-medium' : 'font-normal'}`}>
                        {language.name}
                      </span>
                      {/* Icono de check que solo se muestra en la opción seleccionada */}
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
