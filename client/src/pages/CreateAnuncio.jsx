// import { useState } from 'react';
// import Navbar from '../components/navBar'
// import Stepper from "@mui/material"
// import {Stepper,Step, StepLabel} from "@mui/material"
// import Step from "@mui/material/Step"
// import StepLabel from "@mui/material/StepLabel"
// import Button from '@mui/material/Button';
import Navbar from '../components/navBar'
import anuncio from '../assets/anuncio.png'

function CriarAnuncio() {
    // const [activeStep, setActiveStep] = useState(1);
    return(
        <div className='w-full h-screen'>
           <Navbar /> 
            <div className='flex flex-col w-[1440px] h-[195px] bg-blue-500 pl-[195px] justify-center  text-white  '>
                <h2 className='font-semibold items-center text-2xl'>Olá, Nome</h2>
                <p className='items-center text-base'>Estamos prontos para anunciar o seu imóvel. O cadastro leva em <br/>
                média de 3 a 7 minutos para ser concluído.</p>
            </div>
            <div className='flex gap-40 pt-8'>
                <div className='flex flex-col pl-[196px] '>
                    <p>Qual a localização do imóvel?</p>
                    <label>CEP</label>
                    <input className='px-3 py-4  w-[148px] h-[41px] items-center border border-solid box-border border-gray-400 rounded' placeholder='_ _ _ _ _ - _ _'/>
                    <label>Endereço</label>
                    <input className='w-[544px] h-[41px] rounded border border-solid border-box border-gray-400 px-3 py-4 items-center' />
                   <div className='flex gap-4 ' >
                        <div className='flex flex-col'>
                            <label>Número</label>
                            <input className='w-[237px] h-[41px] items-center px-3 py-4 rounded border border-solid border-box border-gray-400 '/>
                        </div>
                        <div className='flex flex-col'>
                        <label>Complemento</label>
                            <input className='w-[237px] h-[41px] items-center px-3 py-4 rounded border border-solid border-box border-gray-400 '/>
                        </div>
                   </div>
                </div>
                <img src={anuncio} />
            </div>
            {/* <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper> */}
            

        </div>
    )
}

export default CriarAnuncio;