import { useState } from 'react';

interface ReadMoreProps {
  text: string[];
  amountOfWords?: number;
}

export const useReadMore = ({ text, amountOfWords = 200 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let wordsCount = 0;
  const processedText = text.map((paragraph) => {
    const words = paragraph.split(' ');
    wordsCount += words.length;
    return wordsCount > amountOfWords ? null : paragraph;
  }).filter(Boolean) as string[];

  const hiddenParagraphs = text.slice(processedText.length);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return {
    processedText,
    hiddenParagraphs,
    isExpanded,
    toggleExpanded
  };
}; 