
export const ReviewsSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8 w-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col mb-5 pb-5 space-y-3 border-b last:border-b-0 dark:border-slate-400 dark:border-opacity-20 border-slate-300 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex mb-4 items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-700" />
              <div className="flex flex-col ml-2">
                <div className="h-4 w-24 bg-gray-200 dark:bg-neutral-700 rounded mb-1" />
                <div className="h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded" />
              </div>
            </div>
            <div className="flex space-x-1 items-center">
              <div className="w-5 h-5 bg-yellow-200 dark:bg-yellow-600 rounded" />
              <div className="h-4 w-6 bg-gray-200 dark:bg-neutral-700 rounded" />
            </div>
          </div>
          <div className="h-4 w-full bg-gray-200 dark:bg-neutral-700 rounded mb-1" />
          <div className="h-4 w-3/4 bg-gray-200 dark:bg-neutral-700 rounded mb-1" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-neutral-700 rounded" />
          <div className="h-3 w-20 bg-gray-200 dark:bg-neutral-700 rounded mt-2" />
        </div>
      ))}
    </div>
  );
};

export default ReviewsSkeleton; 