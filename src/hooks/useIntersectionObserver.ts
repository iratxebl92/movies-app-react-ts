// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setIsVisible(entry.isIntersecting);
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    });

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible] as const;
};

/*
IntersectionObserver:
API moderna del navegador para observar cambios en la visibilidad de elementos
Es más eficiente que los event listeners de scroll
Nos avisa cuando un elemento entra o sale del viewport
Parámetros del Observer:
root: null: Observa el viewport del navegador
rootMargin: '0px': No añade margen al área de observación
threshold: 0.1: Se dispara cuando el 10% del elemento es visible
...options: Permite sobrescribir estos valores desde fuera
useRef:
Crea una referencia mutable que persiste durante todo el ciclo de vida del componente
En este caso, la usamos para referenciar el elemento DOM que queremos observar
useState:
Mantiene el estado de visibilidad del elemento
Se actualiza cuando el elemento entra/sale del viewport


*/