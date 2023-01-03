import React from 'react';

function Card({title, img, bairro, rooms, price}){
  return(
    <div className='w-72 items-start border border-gray-300  overflow-hidden mx-12 my-16'>
      <div className='overflow-hidden h-48'>
        <img src={img} alt=''/>
      </div>
      <div className='mx-4 text-sky-400 text-sm -mt-4'>
        <h2>{title}</h2>
      </div>
      <div className='mx-4 font-medium  text-xl py-4'>
        <h1>{bairro}</h1>
      </div>
      <div className='flex font-light text-xs mb-4 mx-4'>
        <p className='mr-8'>{rooms}</p>
        <p>{price}</p>
      </div>

    </div>
  )
}

export default Card