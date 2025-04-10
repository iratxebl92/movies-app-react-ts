
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMoviesStore } from '../../../config/store/store';


export const CircleRating = ({rating}:any) => {
  const {theme} = useMoviesStore();
 
  return (
    <div className='circleRating'>
   <CircularProgressbar
   className='max-w-16' 
    value={rating} 
    text={rating}  
    maxValue={10}  
                 
    styles={buildStyles({
        pathColor:
        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        textSize: '30px',
        textColor: '#e5e7eb',
        pathTransitionDuration: 0.5,
        
    })} />
    </div>
  )
}
