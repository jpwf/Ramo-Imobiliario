import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React from 'react';

// function Card({title, img, bairro, rooms, price}){
//   return(
//     <div className='w-72 items-start border border-gray-300  overflow-hidden mx-12 my-16'>
//       <div className='overflow-hidden h-48'>
//         <img src={img} alt=''/>
//       </div>
//       <div className='mx-4 text-sky-400 text-sm -mt-4'>
//         <h2>{title}</h2>
//       </div>
//       <div className='mx-4 font-medium  text-xl py-4'>
//         <h1>{bairro}</h1>
//       </div>
//       <div className='flex font-light text-xs mb-4 mx-4'>
//         <p className='mr-8'>{rooms}</p>
//         <p>{price}</p>
//       </div>

//     </div>
//   )
// }

export default function AptCard(props) {
  return (
    <Card className='w-full min-w-min' >
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="368"
          image={props.img}
          alt="apartamento"
        />
        
        <CardContent className='flex flex-col'>
          <Typography className='text-blue-500 mb-2' variant='subtitle2'>
            {props.name}
          </Typography>
          <Typography className='mb-2 text-base lg:text-xl text-gray-800 font-semibold'>
            {props.street}
          </Typography>
          <div className='flex p-0 gap-2'>
            <Chip className='bg-blue-900 text-sm lg:text-base ' label={props.numberOfBedrooms} color='primary' />
            <Chip className='bg-blue-900 text-sm lg:text-base ' label={props.price} color='primary' />
          </div>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}