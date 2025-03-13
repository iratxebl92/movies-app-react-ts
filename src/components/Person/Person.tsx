import { SwitchTab } from "../SwitchTab"
import { Information } from "./Information"
import { Photos } from "./Photos"



export const Person = () => {
    const onTabChange = (tab: string) => {
        // topRatedOption(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
        console.log(tab)
      };
  return (
    <>
    <Information/>
    <Photos/>
    <SwitchTab options={['Movies', 'Tv Show']} onTabChange={onTabChange} className="flex justify-center py-10" />
    </>
  )
}
