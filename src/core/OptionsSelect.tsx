interface OptionsSelectProps {
  options: any[];
  style?: any;
  value: any;
  onOptionChange: (option: any) => void;
  getOptionLabel: (option: any) => string;
  getOptionValue: (option: any) => string | number;
}

export default function OptionsSelect({ options, style = {}, value, onOptionChange, getOptionLabel, getOptionValue }: OptionsSelectProps) {
  return (
    <form style={style}>
      <select
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={getOptionValue(value)}
        onChange={(e) => {
          const selected = options.find(option => String(getOptionValue(option)) === e.target.value);
          onOptionChange(selected);
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
/*
value en el select hace referencia al valor que se selecciona en el select
el value hace que creamos un "componente controlado" 
Cada vez que se selecciona un valor, se ejecuta el onChange y la prop de value se actualiza con el valor seleccionado y a su vez el value={value} del select
*/