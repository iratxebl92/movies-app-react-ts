export default function SkeletonKeywords() {
   return (
    <div className="!w-[160px] sm:!w-[180px] md:!w-[200px] lg:!w-[220px] animate-pulse ">
        <div className="flex flex-col gap-3">
                 {/* Contenedor con aspect ratio 2:3 para el skeleton */}
                 <div className="relative pb-[150%] w-full overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg">
                     <div className="absolute inset-0 bg-shimmer dark:bg-shimmer-dark bg-[length:200%_100%] animate-shimmer"></div>
                   </div>
                 </div>
                 {/* Skeleton para el título y la información adicional */}
                 <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                   <div className="w-full h-full bg-shimmer dark:bg-shimmer-dark bg-[length:200%_100%] animate-shimmer"></div>
                 </div>
                 <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                   <div className="w-full h-full bg-shimmer dark:bg-shimmer-dark bg-[length:200%_100%] animate-shimmer"></div>
                 </div>
               </div>
    </div>
   );
 }