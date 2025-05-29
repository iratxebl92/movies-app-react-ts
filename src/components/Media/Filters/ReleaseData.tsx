import { ChangeEvent, useEffect, useState } from "react";
import { useMoviesStore } from "../../../config/store/store";

export const ReleaseData = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [minDate, setMinDate] = useState('')
  const [maxDate, setMaxDate] = useState('')
const {setFilterParams} = useMoviesStore()
  
 const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;
  id === 'releaseDateFrom' ? setMinDate(value) : setMaxDate(value)

};
useEffect(() => {
 setFilterParams({release_date_min: minDate, release_date_max: maxDate})
}, [minDate, maxDate])


  return (
    <>
      <p>Release Date</p>
      <div>
        <label htmlFor="releaseDateFrom">From</label>
        <input type="date" id="releaseDateFrom" className="bg-gray-500" onChange={(e) => handleDate(e)} />
      </div>
      <div>
        <label htmlFor="releaseDateTo">To</label>
        <input type="date" id="releaseDateTo" max={`${currentYear}-12-31`} className="bg-gray-500" defaultValue={`${currentYear}-12-31`}  onChange={(e) => handleDate(e)} />
      </div>
    </>
  );
};
