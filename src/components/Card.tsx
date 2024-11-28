import { StarIcon } from "../core/components/Icons/StarIcon"



export const Card = () => {
  return (
    <div className='flex flex-col w-40 mb-10 dark:text-white'>
        <div className='rounded-lg'>
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/oArnlWvky2KtWoGC0ChaDboEvcH.jpg" alt="" className='rounded-lg' />
        </div>
          <p className="font-normal text-sm leading-7 line-clamp-1">Venom: The Last Dance</p>
        <div className='flex justify-between text-sm leading-5'>
            <p>2024</p>
            <div className="flex flex-row text-sm ">      
              <p> <StarIcon/> </p> 
              <p>6.83</p> 
            </div>
        </div>
    </div>
  )
}
