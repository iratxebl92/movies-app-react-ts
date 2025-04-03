// src/hooks/useInitialScroll.ts
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useInitialScroll = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Solo ejecutamos el scroll si estamos en una nueva ruta
    if (window.location.pathname === pathname) {
      window.scrollTo(0, 0);
      
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, [pathname]); // Solo dependemos de pathname
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