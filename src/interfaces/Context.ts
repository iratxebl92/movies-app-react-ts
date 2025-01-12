import { TFunction } from "i18next";

export interface MoviesContextType {
    theme: string,
    handleChangeTheme:() => void,
    t: TFunction<"global", undefined>,
    i18n: any,
    contentTypes: string[],
    timePeriods: string[],
    contentSelected: string,
    setContentSelected: any

}