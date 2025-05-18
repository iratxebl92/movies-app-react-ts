export const InformationSkeleton = () => {
  return (
    <div className="animate-pulse py-16">
      {/* Nombre */}
      <h2 className="text-2xl md:text-4xl pb-4 font-semibold bg-gray-200 dark:bg-neutral-800 rounded-lg w-3/4"></h2>
      
      {/* Biografía */}
      <div className="space-y-3 my-6">
        <div className="h-4 w-full bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
        <div className="h-4 w-4/6 bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
      </div>

      {/* Grid de información personal */}
      <div className="grid grid-cols-2 md:grid-cols-5 my-6 gap-6 md:gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 w-20 bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-neutral-800 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="flex gap-4 mt-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-8 w-8 bg-gray-200 dark:bg-neutral-800 rounded-full"></div>
        ))}
      </div>
    </div>
  )
}
