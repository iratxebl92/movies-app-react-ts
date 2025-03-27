import { ChangeEvent, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useMoviesStore } from "../config/store/store";

interface SortOption {
  key: string;
  label: string;
}

interface SortSelectorProps {
  options: SortOption[];
  id: string;
}


export const SortSelector = ({ options, id }: SortSelectorProps) => {
  const {filterOptions, filterDepartments, setDepartments, setOptions} = useMoviesStore()

  const prueba = ({target}:ChangeEvent<HTMLSelectElement>) => {
    if(target.id === "options") 
    {
      setOptions(target.value)
    }else {
      setDepartments(target.value)
    }
    const {value} = target;

  }
  // useEffect(() => {
  //   console.log(filterDepartments, "departments in SortSelector");
  // }, [filterDepartments]); // Se ejecuta solo cuando filterDepartments cambia

  // useEffect(() => {
  //   console.log(filterOptions, "option in SortSelector");
  // }, [filterOptions]); // Se ejecuta solo cuando filterOptions cambia
  return (
    <div className="relative w-fit">
      <select id={id} onChange={e => prueba(e)}  className="w-48 text-center text-lg py-4 px-7 pr-10 rounded-lg block border border-gray-300 appearance-none cursor-pointer bg-gray-400 text-white" >
        {options.map((option) => (
          <option key={option.key}  value={option.key} className="content-center" >
              {option.label}
          </option>
        ))}
      </select>
      <MdOutlineKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl pointer-events-none" />
    </div>
  );
};
