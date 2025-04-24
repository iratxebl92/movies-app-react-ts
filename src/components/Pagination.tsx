import ReactPaginate from "react-paginate";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export const Pagination = (props: any) => {
  return (
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
      containerClassName="flex space-x-3"
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
  );
};
