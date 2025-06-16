import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { HiLanguage } from "react-icons/hi2";
import { useLanguageSelector, languages } from './hooks/useLanguageSelector';

interface LanguageSelectorProps {
  closeMenu?: (() => void) | undefined;
}

export default function LanguageSelector({ closeMenu }: LanguageSelectorProps) {
  const { currentLanguage, handleLanguageChange } = useLanguageSelector(closeMenu);

  return (
    <div className="w-10">
      <Listbox value={currentLanguage} onChange={handleLanguageChange}>
        <div className="relative">
          <ListboxButton className="cursor-pointer rounded-lg text-sm dark:text-white">
            <HiLanguage/>
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-20 overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
              {languages.map((language) => (
                <ListboxOption
                  key={language.value}
                  className="relative cursor-pointer select-none py-2 pl-10 ui-active:bg-gray-700 ui-active:text-white ui-not-active:text-gray-300"
                  value={language}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate text-white hover:text-stone-300 ${selected ? 'font-medium' : 'font-normal'}`}>
                        {language.name}
                      </span>
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
