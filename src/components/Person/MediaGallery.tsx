import { Card } from "../../core/Card";
import { SwitchTab } from "../../core/SwitchTab";
import { MediaGallerySkeleton } from "../Skeleton/Person/MediaGallerySkeleton";
import OptionsSelect from "../../core/OptionsSelect";
import { useTranslation } from "react-i18next";
import { useMediaGallery } from "./hooks/useMediaGallery";

export const MediaGallery = () => {
  const { t } = useTranslation();
  const {
    isLoading,
    showSkeleton,
    data,
    selectMovies,
    visibleMovies,
    setVisibleMovies,
    disabled,
    optionDepartments,
    departmentSelected,
    selectedIndex,
    onTabChange,
    onDepartmentOptionChange
  } = useMediaGallery();

  if (isLoading || showSkeleton) return <MediaGallerySkeleton/>;
  
  // Wrapper para OptionsSelect
  const handleDepartmentOptionChange = (option: string | undefined) => {
    if (typeof option === 'string') onDepartmentOptionChange(option);
  };

  return (
    <>
      <SwitchTab
        options={["Movies", "Tv Show"]}
        onTabChange={onTabChange}
        className="flex justify-center py-10"
        selectedIndex={selectedIndex}
      />
      <div className="flex justify-end gap-6 mb-8">
        <OptionsSelect<string | undefined> 
          options={optionDepartments} 
          style={{width: '10rem'}} 
          value={departmentSelected as string | undefined} 
          onOptionChange={handleDepartmentOptionChange}
          getOptionLabel={(option: any) => option}
          getOptionValue={(option: any) => option}
        />
      </div>
      <div>
        {selectMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {selectMovies.slice(0, visibleMovies).map((item, index) => (
              <Card movie={item} style={{ width: "100%" }} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full min-h-[20vh]">
            <p className="text-2xl font-bold">{t('noMoviesOrTvShows')}</p>
          </div>
        )}
        <div className="flex justify-center">
          <button 
            disabled={disabled} 
            className={`border-2 rounded-xl p-4 mt-4 text-white ${disabled ? 'hidden' : 'bg-red-700 cursor-pointer'}`} 
            onClick={() => setVisibleMovies((prev) => prev + 20)}
          >
            {t('loadMore')}
          </button>
        </div>
      </div>
    </>
  );
};

