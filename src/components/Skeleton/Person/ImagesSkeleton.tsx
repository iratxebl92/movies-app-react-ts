export const ImagesSkeleton = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {[...Array(6)].map((_, index) => (
                 <div 
                 key={index} 
                 className='w-[200px] md:w-[220px] h-[330px] bg-gray-200 dark:bg-neutral-800 rounded-lg'
                 aria-hidden="true"
               />
        ))}
      </div>
    );
  };
  