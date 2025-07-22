export const DetailsBannerSkeleton = () => {
  return (
    <div className="animate-pulse w-full relative h-screen">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-light/100 via-light/50 to-light/0 dark:from-dark/100 dark:via-dark/50 dark:to-dark/0 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/50 opacity-50" />
        </div>
        <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16">
            {/* Skeleton Container */}
          <div className="z-10 flex flex-col lg:flex-row gap-4 md:gap-8 items-center max-w-[1920px] mx-auto w-full">
            {/* Skeleton Image */}
            <div className="w-80 h-96 md:h-[500px] lg:h-600 lg:w-[37rem] rounded-lg overflow-hidden shadow-2xl transform  transition-transform duration-300 ">
                <div className="h-full w-full bg-gray-200 dark:bg-neutral-800 rounded-lg"/>
            </div>
            {/* Skeleton Text */}
            <div className="text-white flex flex-col gap-2 md:gap-4 text-start justify-start  lg:h-600 w-full  p-6 lg:p-10">
              <div className="bg-gray-300 dark:bg-neutral-800 rounded-lg h-9 w-3/4 " />
              <div className="bg-gray-300 dark:bg-neutral-800 rounded-lg h-4 w-3/5 " />
              {/* Skeleton Tags */}
              <div className="flex gap-2">
                 <div className="bg-gray-300 dark:bg-neutral-800 h-12 w-12 rounded-full"/>
                 <div className="bg-gray-300 dark:bg-neutral-800 h-12 w-20 rounded-lg"/>
                 <div className="bg-gray-300 dark:bg-neutral-800 h-12 w-28 rounded-lg"/>
              </div>
              {/* Skeleton Genres */}
              <div className="flex gap-2">
                 <div className="bg-gray-300 dark:bg-neutral-800 h-12 w-20 rounded-lg"/>
                 <div className="bg-gray-300 dark:bg-neutral-800 h-12 w-20 rounded-lg"/>
                 <div className="bg-gray-300 dark:bg-neutral-800 h-12 w-20 rounded-lg"/>
              </div>
              {/* Skeleton Overview */}
              <div className="bg-gray-200 dark:bg-neutral-800 rounded-lg h-20 lg:w-[calc(100%-10rem)]"/>
              {/* Skeleton Button Trailer and Watch Details*/}
              <div className="flex gap-2">
              <div className="bg-gray-200 dark:bg-neutral-800 rounded-lg h-12 w-28"/>
              <div className="bg-gray-200 dark:bg-neutral-800 rounded-lg h-12 w-28"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
