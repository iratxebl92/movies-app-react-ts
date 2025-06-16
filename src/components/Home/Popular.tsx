import { SwitchTab } from "../../core/SwitchTab";
import { Slider } from "../../core/Slider";
import { useTranslation } from "react-i18next";
import { useHome } from "./hooks/useHome";

export const Popular = () => {
  const { t } = useTranslation();
  const { getSectionData, handleTabChange } = useHome();
  const { data, status, options, selectedIndex } = getSectionData("popular");

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
        <p className="flex-1 text-lg font-semibold md:text-2xl md:font-bold dark:text-white">{t('popular')}</p>
        <div className=" md:w-fit text-xs md:text-base">
          <SwitchTab 
            options={options} 
            onTabChange={(tab) => handleTabChange("popular", tab)} 
            selectedIndex={selectedIndex} 
          />
        </div>
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
