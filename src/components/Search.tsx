

export const Search = () => {
  return (
    <div className="text-center h-320 content-center">
      {/* <div className="opacity-50 absolute">
        <img src="https://image.tmdb.org/t/p/original/p9uplKCEPJq4xGJPJJV46KW1dsA.jpg" alt="" />
      </div> */}
        <h1 className="text-5xl md:text-7xl text-details mb-4">Bienvenid@</h1>
        <div className="">
        <input className=" focus:outline-none border w-300 md:w-500 h-12 border-r-0 rounded-l-lg  pl-3" type="text" placeholder="Busca tu pelicula" />
        <button className="border w-100 md:w-200 h-12 border-l-0 rounded-r-lg  bg-details dark:text-white">Buscar</button>
        </div>
    </div>
  )
}
