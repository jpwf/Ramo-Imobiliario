import React from 'react';
import Navbar from '../components/navBar'
import AnuncioStepper from '../components/Stepper'
import {Slider, Box} from '@material-ui/core'
import anuncio from '../assets/anuncio.png'

function CreateAnuncio2(){
  return(
    
    <div className='h-screen'>
      <Navbar />
      <div className='flex gap-40'>
        <div className='pl-[195px] pt-[72px] flex flex-col'>
          <div className='  pb-[24px] '>
            <h2 className='text-xl font-bold text-gray-800'>Detalhes sobre o seu imóvel</h2>
            <p className='text-base text-gray-800 font-normal'>Essas informações são importantes para que seu anúncio apareça</p>
            <p>corretamente nas buscas dos interessados</p>
          </div>
          <div>
            <p>Insira a imagem do seu imóvel:</p>
            {/* Inserir uploader component */}
            <div className='w-[544px] h-[157px] items-center'>Inserir component uploader</div>
          </div>
          
            <label className='flex flex-col gap-2'>
              Descreva seu imóvel:
              <textarea className='max-h-[544px]' rows={8} cols={24}/>
            </label>
          
          
          <p className='pb-[56px] pt-[26px]'>Quantidade de quartos:</p>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          <div className='py-[22px]'></div>
          <AnuncioStepper/>
        </div>
      
        <img src={anuncio} className='max-w-[416px] max-h-[314px] mt-[242px]' />
      </div>
   
 
    </div>
  )
}
export default CreateAnuncio2