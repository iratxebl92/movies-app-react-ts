


export const Cast = ({cast}:any) => {
  
  console.log(cast, "info")
  return (
    <div className=" mb-10 dark:text-white">
    <div>
       <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${cast?.profile_path}`} className="rounded-lg" alt={cast?.name} title={cast?.name} />
      <p> {cast?.name} </p>
      <p> {cast?.character} </p>
    </div>
    </div>
  )
}
