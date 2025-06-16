import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaRegCommentDots  } from "react-icons/fa";
import { MdOutlineTextSnippet, MdOndemandVideo, MdOutlineInsertPhoto  } from "react-icons/md";
import { DetailsInformation } from "../components/Details/Sections/DetailsInformation";
import { Reviews } from "../components/Details/Sections/Reviews";
import { Images } from "../components/Details/Sections/Images";
import { Videos } from "../components/Details/Sections/Videos";



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


  export const detailsOptions = [
    { key: "information", label: "info", component: DetailsInformation, icon:MdOutlineTextSnippet  },
    { key: "videos", label: "videos", component: Videos, icon:MdOndemandVideo },
    { key: "images", label: "images", component: Images, icon:MdOutlineInsertPhoto },
    { key: "reviews", label: "reviews", component: Reviews, icon:FaRegCommentDots },
  ]
 
  export const formatDate = (dateString: string, locale: string = "es-ES") => {
    const date = new Date(dateString);
  
    // Verificamos si la fecha tiene hora
    const hasTime = dateString.includes('T');  // La 'T' en la fecha indica que tiene hora
    
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    // Si tiene hora y minutos, los incluimos en las opciones
    if (hasTime) {
      options.hour = "2-digit";
      options.minute = "2-digit";
    }
  

    // Forzar la zona horaria UTC para evitar el desfase
    //toLocaleString con timeZone: "UTC" asegura que el formato se realice en la zona horaria UTC.
    //Esto evita que la fecha cambie de 30 de abril a 1 de mayo debido a la zona horaria local. (antes se me modificaban las fechas)
    return date.toLocaleString(locale, { ...options, timeZone: "UTC" });
  };
  //Map es una estructura de datos que almacena pares clave -> valor, similar a un Object, pero más eficiente cuando se trata de búsquedas.
  
  //TODO: Mirar bien y coger apuntes de https://chatgpt.com/c/67de9049-6208-8006-ba25-83676373e4ab

