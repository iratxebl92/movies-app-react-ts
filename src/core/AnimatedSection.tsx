import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    // Hook que detecta cuando el elemento entra en el viewport
    // once: true -> la animación solo ocurre una vez
    // margin: "-100px" -> la animación se activa cuando el elemento está a 100px de entrar en el viewport
    const isInView = useInView(ref, { once: true});
    // Añadimos once: true para que una vez que el elemento esté en pantalla dejemos de observarlo, asi evitamos que haga el efecto siempre que hagamos scroll
  //useInView es un hook de framer-motion que detecta si un elemento está en el viewport (lo ves en pantalla).

    return (
      <motion.div
        ref={ref}
        // Estado inicial: invisible y 50px más abajo
        initial={{ opacity: 0, y: 50 }}
        // Estado animado: si está en el viewport, se hace visible y sube a su posición
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        // Configuración de la transición: duración y tipo de easing
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

