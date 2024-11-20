import React from 'react'

export const Card = () => {
  return (
    <div className='flex flex-col min-w-40'>
        <div>
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/oArnlWvky2KtWoGC0ChaDboEvcH.jpg" alt="" />
        </div>
        <div><p>Nombre peli</p></div>
        <div className='flex justify-around'>
            <p>2024</p>
            <p>6.3</p>
        </div>
    </div>
  )
}
