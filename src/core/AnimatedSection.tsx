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

  /*
  
 ---- USEREF -----
  En React, ref es una forma de apuntar directamente a un elemento del HTML.
  Ejemplo:
    <div id="mi-caja"></div>
    En JS seria: const miCaja = document.getElementById("mi-caja");
    En React con useRef es: 
        const ref = useRef(null);
        <div ref={ref}></div> // Esto conecta el <div> con la variable ref
         Ahora ref.current contiene ese div
         Si hacemos console.log(ref.current) nos mostrará el div
  

  */

 /*
------USEINVIEW(ref)-------
  useInView es un hook que observa un elemento HTML (gracias al ref) y te dice:

        “¿Ese elemento ya se ve en pantalla (en el viewport)?”

    Devuelve true si está en pantalla, y false si no.
         Ejemplo: 
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
   ref se conectará a un div.

    useInView(ref) empezará a vigilar ese div usando una tecnología del navegador llamada IntersectionObserver.

    Si ese div aparece en pantalla al hacer scroll, isInView se vuelve true. 


    ¿ Como sabe useView si el elemento está en pantalla? 
        Detrás de useInView, lo que hace el trabajo real es una API del navegador llamada IntersectionObserver.Es una herramienta que tienen los navegadores modernos que permite observar si un elemento HTML entra o sale de la pantalla (viewport), sin necesidad de hacer scroll manual o chequear posiciones constantemente.

    ✅ ¿Cómo lo usa useInView?
        useInView(ref):

            Agarra el elemento DOM con ref.current.

            Crea un IntersectionObserver.

            Le dice: “Obsérvame este elemento”.

            El navegador, automáticamente, avisa cuando el elemento entra o sale del viewport.

   

🧬  Ejemplo simplificado (sin React)
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                console.log("¡Está en pantalla!");
            }
        }, { threshold: 0.5 });

        const elemento = document.querySelector('#miElemento');
        observer.observe(elemento);
Esto es exactamente lo que hace useInView por dentro. Solo que tú no tienes que escribir todo eso. Le pasas el ref y él se encarga.

📦 En tu código:

        const ref = useRef(null);
        const isInView = useInView(ref);
 -ref.current = el div que queremos observar.

 -useInView crea internamente un IntersectionObserver que observa ese div.

 -Cuando el navegador dice: “El elemento entró en pantalla”, useInView actualiza el valor de isInView.


 */