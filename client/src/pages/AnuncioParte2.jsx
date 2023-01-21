import React from 'react';
import AnuncioStepper from '../components/Stepper'

import anuncio from '../assets/anuncio.png'
import { Slider } from '@mui/material';
import { UploaderButton } from '../components/Uploader';
import { FileArrowUp } from 'phosphor-react';
// import {useForm} from 'react-hook-form'

const marks = [
    {
        value: 0,
        label: '1',
    },
    {
        value: 25,
        label: '2',
    },
    {
        value: 50,
        label: '3',
    },
    {
        value: 75,
        label: '4',
    },
    {
        value: 100,
        label: '5',
    },
]

function CriarAnuncio2() {
    function valuetext(value) {
        return `${value}`;
    }
    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }
    // const { register, handleSubmit} = React.useForm()
    // const onSubmit =(data)=>{
    //   console.log(data)
    // }
    return (
            <div className='flex gap-40'>
                <div className='pl-[195px] pt-[72px] flex flex-col'>
                    <div className='  pb-[24px] '>
                        <h2 className='text-xl font-bold text-gray-800'>Detalhes sobre o seu imóvel</h2>
                        <p className='text-base text-gray-800 font-normal'>Essas informações são importantes para que seu anúncio apareça</p>
                        <p>corretamente nas buscas dos interessados</p>
                    </div>
                    <div>
                        <p>Insira a imagem do seu imóvel:</p>
                        <div className='mt-2 flex justify-center items-center rounded border border-dashed border-gray-400 h-36'>
                            <UploaderButton />
                        </div>
                    </div>

                    <label className='flex flex-col gap-2 pt-6'>
                        Descreva seu imóvel:
                        <textarea className='max-h-[544px] border border-gray-500 resize-none' rows={8} cols={24} />
                    </label>


                    <p className='pb-[36px] pt-6'>Quantidade de quartos:</p>
                    <Slider aria-label='Restricted values' defaultValue={50}
                        marks={marks}
                        step={null}
                        valueLabelDisplay='auto'
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext} />
                    <div className='py-[22px]'></div>
                    <AnuncioStepper />
                </div>
            </div>
    )
}
export default CriarAnuncio2