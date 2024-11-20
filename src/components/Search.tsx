export const Search = () => {
  return (
    <div className="relative h-17.5 md:h-600 flex items-center justify-center bg-blue-900 mb-0">
      {/* Capa de imagen */}
      <div className="absolute inset-0">
        <img
          src="https://image.tmdb.org/t/p/original//8mjYwWT50GkRrrRdyHzJorfEfcl.jpg"
          alt="Imagen de Cabecera"
          className="w-full h-full object-cover opacity-70 object-top" // La imagen de fondo
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Capa oscura encima de la imagen */}
      </div>

      {/* Contenedor de texto y barra de búsqueda con z-index alto */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">Bienvenid@</h1>
        <div className="flex items-center justify-center">
          <input
            className="focus:outline-none border w-300 md:w-500 h-12 border-r-0 rounded-l-lg pl-3 text-black"
            type="text"
            placeholder="Busca tu pelicula"
          />
          <button className="border w-100 md:w-200 h-12 border-l-0 rounded-r-lg bg-details text-white">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};
