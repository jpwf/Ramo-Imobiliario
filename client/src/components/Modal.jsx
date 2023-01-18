/** 
 * NÃO ESTÁ SENDO UTILIZADO NO MOMENTO!
*/


import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip } from '@mui/material';

import { X } from 'phosphor-react';

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
    mb: 2,
    bgcolor: '#3b82f6',
}

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    return (
        <div>
            <button className='bg-blue-400 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded ' onClick={handleOpen}>Veja mais</button>
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
                        component="img"
                        height="200"
                        width="440"
                        image={props.img}
                        alt="apartamento"
                    />
                    <CardContent className='flex flex-col'>
                        <Typography className='text-blue-500 mb-2' variant='subtitle2'>
                            {props.name}
                        </Typography>
                        <Typography className='mb-2 text-xl text-gray-800 font-medium'>
                            {props.street}
                        </Typography>
                        <Typography variant='body2'>
                            {props.description}
                        </Typography>
                        <div className='flex mt-4 p-0 gap-2'>
                            <Chip className='bg-blue-900' label={props.numberOfBedrooms} color='primary' />
                            <Chip className='bg-blue-900' label={props.price} color='primary' />
                        </div>
                        <Button
                            className='w-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none'
                            variant='contained'
                            sx={buttonStyle}
                            onClick={() => {
                                notificacao(true, "Um email foi enviado para o(a) Vendedor(a)! Espere o contato.")
                                setTimeout(() => navigate('/busca'), 3000)
                                handleClose;
                            }}
                        >
                            Entrar em contato
                        </Button>
                    </CardContent>
                </Card>
            </Modal>
        </div>
    );
} 