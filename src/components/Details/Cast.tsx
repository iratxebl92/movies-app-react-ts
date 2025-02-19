


export const Cast = ({cast}:any) => {
  
  console.log(cast?.profile_path , "info")
  return (
    <div className="mb-2 dark:text-white">
    <div>
       <img src={
        cast?.profile_path 
       ? 
       `https://www.themoviedb.org/t/p/w220_and_h330_face${cast?.profile_path}`
      :
      '/images/people-icon.png'

       } className={`rounded-lg h-15 object-contain ${!cast?.profile_path && 'border-2'} `} alt={cast?.name} title={cast?.name} />
      <p> {cast?.name} </p>
      <p> {cast?.character} </p>
    </div>
    </div>
  )
}
