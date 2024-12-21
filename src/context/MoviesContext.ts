import { createContext } from "react";
import { MoviesContextType } from "../interfaces/Context";


export const MoviesContext = createContext< MoviesContextType | undefined>(undefined);