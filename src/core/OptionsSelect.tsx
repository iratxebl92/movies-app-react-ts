
export default function OptionsSelect({ options, style = {}, value, onOptionChange }: { options: any[], style: any, value: any, onOptionChange: any}) {


  return (
    <form style={style}>
      <select
        id=""
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
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