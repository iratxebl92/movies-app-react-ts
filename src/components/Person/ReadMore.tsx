import { useReadMore } from './hooks/useReadMore';

interface ReadMoreProps {
  id: string;
  text: string[]; // Ahora recibe un array de párrafos
  amountOfWords?: number;
}

export const ReadMore = ({ id, text, amountOfWords = 200 }: ReadMoreProps) => {
  const { processedText, hiddenParagraphs, isExpanded, toggleExpanded } = useReadMore({ text, amountOfWords });
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
            onClick={toggleExpanded}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </span>
        </>
      )}
    </div>
  );
};
