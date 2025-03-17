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
  className = "",
  containerClassName = "",
  buttonClassName = "",
  activeButtonClassName = "",
  activeBgClassName = "",
}: SwitchTabProps) => {
  const [selected, setSelected] = useState<number>(0);

  const defaultClasses = {
    wrapper: "flex justify-end",
    container:
      "relative flex items-center w-56 rounded-2xl bg-gray-200 overflow-hidden mr-3 mb-3",
    button:
      "relative z-10 flex-1 px-4 py-2 text-center transition-colors duration-300 text-gray-600",
    activeButton: "text-white",
    activeBg:
      "absolute top-0 left-0 h-full w-1/2 bg-details rounded-2xl transition-transform duration-300 ease-in-out",
  };

  const mergeClasses = (defaultClass: string, customClass?: string) =>
    `${defaultClass} ${customClass || ""}`.trim();

  return (
    <div className={mergeClasses(defaultClasses.wrapper, className)}>
      <div className={mergeClasses(defaultClasses.container, containerClassName)}>
        <div
          className={`${mergeClasses(defaultClasses.activeBg, activeBgClassName)} ${
            selected === 1 ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>

        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              setSelected(index);
              onTabChange(option);
            }}
            className={`${mergeClasses(defaultClasses.button, buttonClassName)} ${
              selected === index ? mergeClasses(defaultClasses.activeButton, activeButtonClassName) : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
