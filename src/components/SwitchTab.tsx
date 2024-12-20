import { useState } from "react";

type SwitchTabProps = {
  options: string[];
};

export const SwitchTab = ({ options }: SwitchTabProps) => {
  const [selected, setSelected] = useState<Number>(0);

  return (
    <div className="flex justify-end">
      <div className="relative flex items-center w-56 rounded-2xl bg-gray-200 overflow-hidden mr-3 mb-3">
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-details rounded-2xl transition-transform duration-300 ease-in-out ${
            selected === 1 ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>

        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`relative z-10 flex-1 px-4 py-2 text-center transition-colors duration-300 ${
              selected === index ? "text-white" : "text-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
