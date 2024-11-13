import { TFunction } from "i18next";
import { createContext } from "react";

interface MoviesContextType {
    prueba: string,
    theme: string,
    handleChangeTheme:() => void,
    t: TFunction<"global", undefined>,
    i18n: any
}

export const MoviesContext = createContext< MoviesContextType | undefined>(undefined);