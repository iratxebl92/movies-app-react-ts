import { TFunction } from "i18next";

export interface MoviesContextType {
    prueba: string,
    theme: string,
    handleChangeTheme:() => void,
    t: TFunction<"global", undefined>,
    i18n: any
}