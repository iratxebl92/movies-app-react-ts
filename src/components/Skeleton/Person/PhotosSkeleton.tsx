import React, { useEffect, useState } from 'react'

interface PhotosSkeletonProps {
  count?: number;
}

export const PhotosSkeleton: React.FC<PhotosSkeletonProps> = ({ count = 6 }) => {
  const [itemsCount, setItemsCount] = useState(count);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) { // sm breakpoint
        setItemsCount(1);
      } else if (window.innerWidth < 785) { // md breakpoint
        setItemsCount(2);
      }
      else if (window.innerWidth < 990) { // md breakpoint
        setItemsCount(3);
      } else if (window.innerWidth < 1228) { // lg breakpoint
        setItemsCount(4);
      } 
      else if (window.innerWidth < 1490) { // lg breakpoint
        setItemsCount(5);
      } else {
        setItemsCount(count);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return (
    <div className='animate-pulse flex flex-wrap gap-4' role="status" aria-label="Cargando fotos">
      {[...Array(itemsCount)].map((_, index) => (
        <div 
          key={index} 
          className='w-[220px] h-[330px] bg-gray-200 dark:bg-neutral-800 rounded-lg'
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
