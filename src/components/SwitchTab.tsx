import { useState } from "react";

type SwitchTabProps = {
  options: string[];
  onTabChange: (tab: string) => void;
  className?: string;
  containerClassName?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  activeBgClassName?: string;
};

export const SwitchTab = ({
  options,
  onTabChange,
  className = "flex justify-end",
  containerClassName = "relative flex items-center w-56 rounded-2xl bg-gray-200 overflow-hidden mr-3 mb-3",
  buttonClassName = "relative z-10 flex-1 px-4 py-2 text-center transition-colors duration-300 text-gray-600",
  activeButtonClassName = "text-white",
  activeBgClassName = "absolute top-0 left-0 h-full w-1/2 bg-details rounded-2xl transition-transform duration-300 ease-in-out",
}: SwitchTabProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelection = (index: number, option: string) => {
    setSelected(index);
    onTabChange(option);
  };

  return (
    <div className={className}>
      <div className={containerClassName}>
        <div
          className={`${activeBgClassName} ${
            selected === 1 ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>

        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelection(index, option)}
            className={`${buttonClassName} ${
              selected === index ? activeButtonClassName : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
