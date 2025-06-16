import { IMovie } from "./IMovie";

export type MediaType = "movie" | "tv";

export interface DetailsInformationProps {
  data: IMovie;
  type: MediaType;
}

export interface DetailsOptionsProps {
  id: number;
  type: MediaType;
}

export type DetailOption = {
  key: string;
  label: string;
  component: React.ComponentType<any>;
  icon: React.ElementType;
};

export interface UseContentShowcaseProps {
  data: IMovie;
  type: MediaType;
}

export interface ContentShowcaseProps {
  data: IMovie;
  type: MediaType;
}

export type ContentResult = {
  component: 'Information' | 'Videos' | 'Images' | 'Reviews' | 'Season';
  props: DetailsInformationProps | DetailsOptionsProps;
} | null; 

// Interfaz que define la estructura de cada opción en el menú de pestañas

//interface: Es una forma de definir la forma (shape) de un objeto, principalmente para objetos y clases.
//type: Es una forma más general de definir tipos, puede ser para objetos, uniones, primitivas, funciones, etc.