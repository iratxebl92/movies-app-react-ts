

export const SeasonsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Selector skeleton */}
      <div className="w-72 h-10 bg-gray-200 dark:bg-neutral-700 rounded-lg mb-8 content-start" />
      <div className="w-full h-4 bg-gray-200 dark:bg-neutral-700 rounded-lg mb-8 content-start" />
      {/* Episodios skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mb-11 lg:mb-4">
          <div className="rounded-xl h-52 md:h-[25rem] md:w-[45rem] lg:h-[15rem] lg:w-[30rem] overflow-hidden bg-gray-200 dark:bg-neutral-700" />
          <div className="flex flex-col gap-2 text-start">
            <div>
              <div className="h-8 w-40 bg-gray-200 dark:bg-neutral-700 rounded mb-2" />
              <div className="flex flex-row gap-2 leading-8 text-sm opacity-75 mb-2">
                <div className="h-4 w-20 bg-gray-200 dark:bg-neutral-700 rounded" />
                <div className="h-4 w-12 bg-gray-200 dark:bg-neutral-700 rounded" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-neutral-700 rounded" />
              </div>
            </div>
            <div className="h-4 w-full bg-gray-200 dark:bg-neutral-700 rounded mb-1" />
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-neutral-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonsSkeleton; 