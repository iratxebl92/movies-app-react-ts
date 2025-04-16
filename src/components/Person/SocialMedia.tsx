import { usePersonSocialMedia } from "../../hooks/useMovies";
import { socialMedia } from "../../utils/filters";

export const SocialMedia = ({ id }) => {
  const { data } = usePersonSocialMedia(id);

  
  // Si data no trae nada no hace todo lo de fuera del if
  if (!data) {
    return null; 
  }

  const filteredSocialMedia = socialMedia.filter(({ key }) => (data[key])); //Se accede al valor de data[key] y si es "" o null no lo guarda. toma cada objeto de socialMedia, extrae su key y verifica si data[key] tiene un valor. Si data[key] es undefined o null, la condición es falsa y esa red social se excluye del array filtrado. Y he desestructurado key en vez de poner value y luego value.key directamente {key}. 


  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {filteredSocialMedia.map(({ key, label, icon: Icon, web }) => (
        <a
          href={`${web}${data[key]}`} //data[key] obtiene el valor asociado a la clave key en el objeto data, y este valor se concatena con la URL base web para formar el enlace completo.
          key={key}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", color: "black" }}
        >
          <Icon style={{ fontSize: "24px" }} />
        </a>
      ))}
    </div>
  );
};

/*
los iconos de react-icons se muestran como componentes de react 
import { FaFacebook } from "react-icons/fa";
<FaFacebook />

Los iconos los hemos guardado como propiedad del objeto --> icon: FaFacebook

en .map hemos desestructurado las propiedades y renombramos icon {key, label, icon: Icon, web} en vez de poner value y luego value.key etc.

Lo que hace icon: Icon es renombrar la propiedad icon como Icon para que sea más fácil de usar en el JSX.
Usamos <Icon /> para renderizar el componente de ese icono en el JSX.

Sin desestructurar, para icon seria asi (hay dos opciones) :
  {React.createElement(value.icon, { style: { fontSize: "24px" } })}
  o
 value.icon style={{ fontSize: "24px" }} /> 

 El método React.createElement es una forma más explícita de crear un componente dinámicamente. Como value.icon es un componente de React, usamos React.createElement para renderizarlo. Esto es necesario si no estás usando JSX directamente con <Icon /> (que es lo que ocurre cuando desestructuramos y asignamos el icono a Icon).
*/
