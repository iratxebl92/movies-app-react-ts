import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";

export interface MoviesContextType {
    theme: string,
    handleChangeTheme:() => void,
    t: TFunction<"global", undefined>,
    i18n: any,
    contentTypes: string[],
    timePeriods: string[]
}