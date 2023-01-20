import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";
import AnuncioStepper from "../components/Stepper";
import anuncio from '../assets/anuncio.png'

function CriarAnuncio() {
    return (
        <div className=' w-full h-screen'>
            <Navbar />
            <div className='grid grid-cols-2 gap-8 w-full items-start justify-center' >
                <Outlet />
                <img src={anuncio} className='max-w-[416px] max-h-[314px]' />
            </div>
        </div>
    )
}

export default CriarAnuncio;