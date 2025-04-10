import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { Information } from "../components/Person/Information";
import { Reviews } from "../components/Details/Reviews";
import { Backdrops } from "../components/Details/Backdrops";
import { Videos } from "../components/Details/Videos";

export const sortOptions = [
  { key: "vote_count.desc", label: "Most Known For"},
  { key: "vote_average.asc", label: "Rating Ascending" },
  { key: "vote_average.desc", label: "Rating Descending" },
  // { key: "vote_count.asc", label: "Popularity Ascending" },
  { key: "popularity.asc", label: "Popularity Ascending" },
  { key: "popularity.desc", label: "Popularity Descending" },
  { key: "release_date.asc", label: "Release Date Ascending" },
  { key: "release_date.desc", label: "Release Date Descending" },
  { key: "title.asc", label: "Name (A-Z)" },
  { key: "title.desc", label: "Name (Z-A)" }
]

  export const sortDepartaments = [
        {key: "all", label: "All Departments"},
        {key: "acting", label: "Acting"},
       { key: "production", label: "Production"},
        {key: "creator", label: "Creator"},
    
  ]
  
  export const genreOptions = [
    { key: "action", label: "Action" },
    { key: "comedy", label: "Comedy" },
    { key: "drama", label: "Drama" },
  ];

  export const socialMedia = [
    { key: "facebook_id", label: "Facebook", icon: FaFacebook, web: "https://www.facebook.com/" },
    { key: "twitter_id", label: "Twitter", icon: FaTwitter, web: "https://x.com/" },
    { key: "youtube_id", label: "YouTube", icon: FaYoutube, web: 'https://www.youtube.com/' },
    { key: "instagram_id", label: "Instagram", icon: FaInstagram, web: 'https://www.instagram.com/' },
    { key: "tiktok_id", label: "TikTok", icon: FaTiktok, web: 'https://www.tiktok.com/@' },
  ];

  const monthsMap = new Map([
    ["01", "Enero"], ["02", "Febrero"], ["03", "Marzo"], ["04", "Abril"],
    ["05", "Mayo"], ["06", "Junio"], ["07", "Julio"], ["08", "Agosto"],
    ["09", "Septiembre"], ["10", "Octubre"], ["11", "Noviembre"], ["12", "Diciembre"]
  ]);
  


  export const detailsOptions = [
    { key: "information", label: "Information", component: Information },
    { key: "videos", label: "Videos", component: Videos },
    { key: "images", label: "Backdrops", component: Backdrops },
    { key: "reviews", label: "Reviews", component: Reviews},
  ]
 
  export const getBirthdayDate = (date: string): string[] => {
    if (!date) return [];
  
    const parts = date.split("-");
    if (parts.length !== 3) return []; // Verifica que el formato sea válido
  
    const [year = "", month = "", day = ""] = parts; // Asignamos valores por defecto
  
    const monthName: string = monthsMap.get(month) ?? month; // Garantizamos string
  
    return [day, " de ", monthName, " de ", year];
  };

  // El codigo de abajo funciona, PERO tiene errores de tipado, ya que split("-") devuelve un array de strings, pero TypeScript no puede garantizar que siempre tenga 3 elementos.
// Añadiendo un valor por defecto aseguramos que ningun elemento sea nunca undefined y asi siempre serán 3 elementos


  // export const getBirthdayDate = (date: string): string[] => {
  //   if (!date) return []; // Manejo de caso indefinido
  
  //   const [year, month, day] = date.split('-');
  //   const monthName = monthsMap.get((month)) ?? month; // Si no existe, mantiene el valor numérico
    
  //   return [day, " de ", monthName, " de ", year];
  // };
  //Map es una estructura de datos que almacena pares clave -> valor, similar a un Object, pero más eficiente cuando se trata de búsquedas.
  
  //TODO: Mirar bien y coger apuntes de https://chatgpt.com/c/67de9049-6208-8006-ba25-83676373e4ab

  // const months = [
  //   {key:"1", value:"Enero"},
  //   {key:"2", value:"Febrero"},
  //   {key:"3", value:"Marzo"},
  //   {key:"4", value:"Abril"},
  //   {key:"5", value:"Mayo"},
  //   {key:"6", value:"Junio"},
  //   {key:"7", value:"Julio"},
  //   {key:"8", value:"Agosto"},
  //   {key:"9", value:"Septiembre"},
  //   {key:"10", value:"Octubre"},
  //   {key:"11", value:"Noviembre"},
  //   {key:"12", value:"Diciembre"},

  //  ]
  //  let array;
  //  export const getBirthdayDate = (date:any) => 
  //   { array = date?.split('-')
  //    const prueba = array[1]
  //    const newDate = months.find(({key}) => key === prueba)
  //    array.splice(1,1, newDate?.value)
  //    console.log(array)
  //    return array
     
  //   }
 