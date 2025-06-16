import ReactPaginate from "react-paginate";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";

export const MediaPagination = (props: any) => {
  return (
    <>
      {/* Desktop Pagination */}
      <ReactPaginate
        breakLabel="..." // Etiqueta que muestra puntos suspensivos entre páginas
        onPageChange={props.handlePageClick} // Callback cuando se cambia de página
        pageRangeDisplayed={5} // Cuántas páginas mostrar en el rango visible
        pageCount={props.pageCount} // Total de páginas a mostrar
        renderOnZeroPageCount={null} // No renderiza nada si el conteo es 0
        forcePage={props.page - 1} // Fuerza la página activa (ReactPaginate empieza en 0)
        nextLabel={<IconChevronRight className="w-5 h-5" />} // Icono de siguiente página
        previousLabel={<IconChevronLeft className="w-5 h-5" />} // Icono de página anterior

        // Estilos de Tailwind para los elementos del paginador
        containerClassName="flex space-x-3 hidden md:flex" // Hide on mobile, show on desktop
        pageClassName="min-w-[35px] h-[35px] hidden md:flex text-slate-500 dark:text-slate-300 font-medium text-sm bg-slate-200 dark:bg-slate-700 rounded-lg"
        pageLinkClassName="w-full h-full px-4 pt-[2px] flex items-center justify-center"
        activeClassName="!bg-blue-600 !text-white"
        previousClassName="min-w-[35px] h-[35px] flex text-slate-500 dark:text-slate-300 font-semibold text-lg bg-slate-200 dark:bg-slate-700 rounded-lg"
        previousLinkClassName="w-full h-full px-2 flex items-center justify-center"
        nextClassName="min-w-[35px] h-[35px] flex text-slate-500 dark:text-slate-300 font-semibold text-lg bg-slate-200 dark:bg-slate-700 rounded-lg"
        nextLinkClassName="w-full h-full px-2 flex items-center justify-center"
        breakClassName="min-w-[35px] h-[35px] hidden md:flex text-slate-500 dark:text-slate-300 font-semibold text-lg bg-background-light dark:bg-slate-900 rounded-lg"
        breakLinkClassName="w-full h-full px-2 flex items-center justify-center pointer-events-none"
        disabledClassName="!bg-slate-100 dark:!bg-slate-800 opacity-50"
        disabledLinkClassName="cursor-not-allowed"
      />

      {/* Mobile Pagination */}
      <div className="flex md:hidden items-center space-x-3"> {/* Show only on mobile */}
        {/* Previous Button */}
        <button
          onClick={() => props.handlePageClick({ selected: props.page - 2 })} // Adjust for 0-indexed selected
          disabled={props.page === 1}
          className={clsx(
            "min-w-[35px] h-[35px] flex items-center justify-center text-slate-500 dark:text-slate-300 font-semibold text-lg bg-slate-200 dark:bg-slate-700 rounded-lg",
            {
              "!bg-slate-100 dark:!bg-slate-800 opacity-50 cursor-not-allowed": props.page === 1
            }
          )}
        >
          <IconChevronLeft className="w-5 h-5" />
        </button>

        {/* Current Page Number */}
        <div className="min-w-[35px] h-[35px] flex items-center justify-center text-white font-medium text-sm bg-blue-600 rounded-lg">
          {props.page}
        </div>

        {/* Next Button */}
        <button
          onClick={() => props.handlePageClick({ selected: props.page })} // Adjust for 0-indexed selected
          disabled={props.page === props.pageCount}
          className={clsx(
            "min-w-[35px] h-[35px] flex items-center justify-center text-slate-500 dark:text-slate-300 font-semibold text-lg bg-slate-200 dark:bg-slate-700 rounded-lg",
            {
              "!bg-slate-100 dark:!bg-slate-800 opacity-50 cursor-not-allowed": props.page === props.pageCount
            }
          )}
        >
          <IconChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};
