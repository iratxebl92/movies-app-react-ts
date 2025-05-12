import { useMoviesStore } from "../config/store/store";

export default function OptionsSelect({ options, style = {} }: { options: any[], style: any }) {
  console.log(options);
  const {setVideosType} = useMoviesStore();

  return (
    <form style={style}>
      <select
        id=""
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setVideosType(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
}
