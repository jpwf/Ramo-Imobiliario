import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material';

import { X, Bed } from 'phosphor-react';

import notificacao from '../utils/notificacao';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 440,
  bgcolor: 'white',
  boxShadow: 24,
  p: 0,
};

const buttonStyle = {
  mt: 2,
  bgcolor: '#3b82f6',
}

const AptCard = ({ img, owner, street, numberOfBedrooms, price, description}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <Card className='w-full min-w-[221px] max-h-80'>
        <CardActionArea onClick={handleOpen} >
          <CardMedia
            className='max-h-[138px] md lg:max-h-[200px]'
            component="img"
            height="200"
            width="368"
            image={img}
            alt="apartamento"
          />
          <CardContent className='flex flex-col'>
            <Typography className='text-blue-500 mb-2' variant='subtitle2'>
              {owner}
            </Typography>
            <Typography className='mb-2 text-base lg:text-xl text-gray-800 font-semibold'>
              {street}
            </Typography>
            <div className='flex p-0 items-center'>
              <Typography className=' text-sm lg:text-base mr-1'>
                {numberOfBedrooms}
              </Typography>
              <Bed size={16} />
              <Typography className=' text-blue-500 text-sm lg:text-base font-semibold ml-3'>
                {price}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardHeader
            className='absolute w-full'
            action={
              <X
                className='hover:shadow-md hover:rounded-md'
                color='#4b5563'
                cursor='pointer'
                size={32}
                onClick={handleClose}
              />
            }
          />
          <CardMedia
            className='max-h-56'
            component="img"
            height="200"
            width="440"
            image={img}
            alt="apartamento"
          />
          <CardContent className='flex flex-col'>
            <Typography className='text-blue-500 mb-2' variant='subtitle2'>
              {owner}
            </Typography>
            <Typography className='mb-2 text-xl text-gray-800 font-medium'>
              {street}
            </Typography>
            <Typography variant='body2'>
              {description}
            </Typography>
            <div className='flex mt-4 p-0 items-center'>
              <Typography className='' color='primary'>
                {numberOfBedrooms > 1 ? `${numberOfBedrooms} Quartos` : `${numberOfBedrooms} Quarto`}
              </Typography>
              <Typography className='ml-4 text-lg text-blue-500 font-semibold' color='primary'>
              {price}
              </Typography>
            </div>
            <Button
              className='w-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none'
              variant='contained'
              sx={buttonStyle}
              onClick={() => {
                notificacao(true, "Solicitação de contato enviada com sucesso!");
                setTimeout(() => handleClose(), 3000);
              }}
            >
              Entrar em contato
            </Button>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
}

export default AptCard;