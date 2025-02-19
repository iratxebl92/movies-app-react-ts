


export const Cast = ({cast}:any) => {
  
  
  return (
    <div className="mb-2 dark:text-white">
    <div>
      <div>

       <img src={
         cast?.profile_path 
         ? 
         `https://www.themoviedb.org/t/p/w220_and_h330_face${cast?.profile_path}`
         :
         '/images/people-icon.png'
         
        } className={`rounded-lg h-15 w-40 object-contain ${!cast?.profile_path && 'border-2'} `} alt={cast?.name} title={cast?.name} />
        </div>
        <div className="flex flex-col text-center text-sm w-40 mt-1">
      <p className="font-medium" > {cast?.name} </p>
      <p className="text-gray-600 dark:text-gray-300"> {cast?.character} </p>
        </div>
    </div>
    </div>
  )
}
