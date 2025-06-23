import React from "react";

export interface OptionsSelectProps<T> {
  options: T[];
  style?: React.CSSProperties;
  value: T;
  onOptionChange: (option: T) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string | number;
}

export default function OptionsSelect<T>({
  options,
  style = {},
  value,
  onOptionChange,
  getOptionLabel,
  getOptionValue,
}: OptionsSelectProps<T>) {
  return (
    <form style={style}>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={String(getOptionValue(value))}
        onChange={(e) => {
          const selected = options.find(
            (option) => String(getOptionValue(option)) === e.target.value
          );
          if (selected) {
            onOptionChange(selected);
          }
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </select>
    </form>
  );
}
