import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const SortSelector = ({ options }: any) => {
  return (
    <div className="relative w-fit ">
        <select className="py-4 px-7 pr-10 m-2 rounded-lg block border border-gray-300 appearance-none cursor-pointer">
          {options.map((option: any) => (
            <option className="" key={option.key}>{option.label}</option>
          ))}
        </select>
        <MdOutlineKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl pointer-events-none" />

    </div>
  );
};
