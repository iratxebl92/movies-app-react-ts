import { useTranslation } from "react-i18next";
import { Slider } from "../../core/Slider";
import { SwitchTab } from "../../core/SwitchTab";
import { useHome } from "./hooks/useHome";

export const TopRated = () => {
  const { t } = useTranslation();
  const { getSectionData, handleTabChange } = useHome();
  const { data, status, options, selectedIndex } = getSectionData("topRated");

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
        <p className="flex-1 text-lg font-semibold md:text-2xl md:font-bold dark:text-white">
          {t('topRated')}
        </p>
        <div className=" md:w-fit text-xs md:text-base">
          <SwitchTab 
            options={options} 
            onTabChange={(tab) => handleTabChange("topRated", tab)} 
            selectedIndex={selectedIndex} 
          />
        </div>
      </div>
      <Slider data={data} status={status} />
    </div>
  );
};
