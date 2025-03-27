import { useState } from 'react';

interface ReadMoreProps {
  id: string;
  text: string[]; // Ahora recibe un array de párrafos
  amountOfWords?: number;
}

export const ReadMore = ({ id, text, amountOfWords = 200 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Convertimos cada párrafo en palabras y cortamos según `amountOfWords`
  let wordsCount = 0;
  const processedText = text.map((paragraph) => {
    const words = paragraph.split(' '); // recoge todas las palabras de cada parrafo (en cada vuelta en el map recorre cada posición que es un parrafo) Lo guarda en un array y cada palabra es una posición
   
    wordsCount += words.length; //Añade a la variable el tamaño del texto
    return wordsCount > amountOfWords ? null : paragraph; // Si wordsCount ya en esa vuelta supera a amountOfWords devuelve null y lo guarda en el array, sino devuelve ese parrafo.
  }).filter(Boolean) as string[]; // Guarda los valores que son true de processedText(los que no se hayan guardado como "" o null)
  //Mirar apuntes
  
  const hiddenParagraphs = text.slice(processedText.length); //Guardaremos los parrafos desde la posición final de processedText, ya que desde ahi supera amountOfWords y aerán los que se muestren si damos a "Show more"

  const textClass = 'mb-2 text-base md:text-lg leading-8'

  return (
    <div id={id}>
      {processedText.map((paragraph, index) => (
        <p key={index} className={textClass}>{paragraph}</p>
      ))}

      {hiddenParagraphs.length > 0 && (
        <>
            {/* Se muestran los parrafos ocultos */}
          {isExpanded && hiddenParagraphs.map((paragraph, index) => (
            <p key={`hidden-${index}`} className={textClass}>{paragraph}</p>
           ))}
          
          <span
            className="text-violet-400 ml-2 cursor-pointer flex justify-end"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </span>
        </>
      )}
    </div>
  );
};
