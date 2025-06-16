export const VideoSkeleton = () => {
    return (
      <>
          <div className="ml-5 flex gap-4 justify-start">
            <div className="bg-gray-200 dark:bg-neutral-800 h-12 w-80 rounded-lg" />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-5 justify-start">
        {[...Array(6)].map((_, index) => (
          <div 
          key={index} 
          className=' w-[250px] md:w-[400px] h-[250px] bg-gray-200 dark:bg-neutral-800 rounded-lg'
          aria-hidden="true"
          />
        ))}
      </div>
        </>
    );
  };
  