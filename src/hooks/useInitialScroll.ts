// src/hooks/useInitialScroll.ts
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizado para manejar el comportamiento del scroll en la aplicación
 * Se encarga de dos casos principales:
 * 1. Cuando no hay hash en la URL: hace scroll al inicio de la página
 * 2. Cuando hay hash en la URL: hace scroll suave a la sección correspondiente
 */
export const useInitialScroll = () => {
  // Obtenemos pathname y hash de la URL actual
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Solo ejecutamos la lógica si estamos en la misma ruta que la URL actual
    if (window.location.pathname === pathname) {
      if (hash) {
        // Si hay hash en la URL (ej: #reviews)
        // Esperamos 100ms para asegurarnos de que el contenido se ha renderizado
        setTimeout(() => {
          // Buscamos el elemento con el ID correspondiente al hash
          const element = document.getElementById(hash.replace('#', ''));
          if (element) {
            // Si encontramos el elemento, hacemos scroll suave hasta él
            //scrollIntoView es un método nativo del navegadr, puede ser sin opciones o con opciones. scrollIntoView() o :
            element.scrollIntoView({ behavior: 'smooth' }); // behavior: 'smooth'hace que el scroll sea animado
          }
        }, 100);
      } else {
        // Si no hay hash, simplemente hacemos scroll al inicio de la página
        window.scrollTo(0, 0);
      }
      
      // Desactivamos la restauración automática del scroll del navegador
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, [pathname, hash]); // El efecto se ejecuta cuando cambia la ruta o el hash
};


/*
useLayoutEffect:
Es similar a useEffect pero se ejecuta de forma síncrona después de que React haya realizado todas las mutaciones del DOM
Se ejecuta antes de que el navegador pinte la pantalla
Es perfecto para manipular el DOM antes de que el usuario vea algo
En este caso, nos permite controlar el scroll antes de que la página se muestre
useLocation:
Hook de React Router que nos da acceso a la ubicación actual
pathname nos dice qué ruta estamos visitando
Lo incluimos en el array de dependencias para que el efecto se ejecute cada vez que cambie la ruta
window.scrollTo(0, 0):
Método nativo del navegador que mueve el scroll a una posición específica
En este caso, lo movemos al inicio (0,0)
window.history.scrollRestoration:
Propiedad que controla el comportamiento de restauración del scroll
Por defecto es 'auto', lo que significa que el navegador intenta recordar la posición del scroll
Al ponerlo en 'manual', le decimos al navegador que no intente recordar la posición

*/