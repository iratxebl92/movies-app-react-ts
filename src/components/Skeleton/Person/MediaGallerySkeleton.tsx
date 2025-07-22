

export const MediaGallerySkeleton = () => {
  return (
    <div className='animate-pulse flex flex-col gap-10 mt-10'>
{/* Switch tab */}
    <div className="flex gap-4 justify-center">
            <div className="bg-gray-200 dark:bg-neutral-800 h-12 w-80 rounded-lg" />
            
        </div>

        {/* Options buttons */}
        <div className="flex gap-4 justify-end">
            <div className="bg-gray-200 dark:bg-neutral-800 h-12 w-64 rounded-lg" />
        </div>

        {/* Gallery */}
        <div className='flex flex-wrap gap-4'>

        {
            [...Array(10)].map((_, index) => (
                <div key={index} className='w-[200px] h-[280px] bg-gray-200 dark:bg-neutral-800 rounded-lg ' />

            ))
        }
        </div>
       {/* Button load more */}
        <div className='flex justify-center'>
          <div className='w-20 h-12 bg-gray-200 dark:bg-neutral-800 rounded-lg'/>

        </div>
    </div>
  )
}


