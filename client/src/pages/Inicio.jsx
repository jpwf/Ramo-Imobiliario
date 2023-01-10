import {Phone, InstagramLogo, TwitterLogo, FacebookLogo
, MapPin, NavigationArrow,  Door, MagnifyingGlass} from 'phosphor-react'
import SelectComponent from '../components/SelectComponent';

function Inicio() {
    return(
        <div>
            <div className=' bg-home  bg-cover w-[1440px] h-[708px]'>
                <div className='text-3xl font-bold text-white pt-56 ml-24 '>
                    <p>Encontre um lar na</p>
                    <p>cidade do </p>
                    <p>Rio de Janeiro</p>
                </div>
                <div className='flex bg-slate-100 w-{800px} h-{113px} mb-64 '>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <MapPin size={16} color="#050505" />
                            Cidade
                        </div>
                        
                        <SelectComponent label='Rio de Janeiro' className='w-{57px} h-{36px}'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <NavigationArrow size={16} color="#050505" />
                            Bairro
                        </div>
                        
                        <SelectComponent label='Selecione' className='w-{57px} h-{36px}'/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <Door size={16} color="#050505" />
                            Número de quartos
                        </div>
                        
                        <SelectComponent label='Selecione' className='w-{57px} h-{36px}'/>
                        <button className='bg-blue-400 flex w-{100px} h-{52px}'>
                            <MagnifyingGlass size={16} color="#f6eaea" />
                        </button>
                    </div>

                
            </div>
            <footer className='flex w-{1440px} h-{192px} justify-between items-center text-white  bg-blue-400 px-24'>
                <div className='flex'>
                    <Phone size={20} className='mt-1' color="#eeeeec"/>
                    (21)99999-9999
                </div>
                <div className='flex flex-col  items-center'>
                    <h2>Endereço</h2>
                    <p>Rua Gen. Canabarro, 485 - Maracanã. Rio de Janeiro - RJ </p>
                    <p>(21)4002-8922</p>
                </div>
                <div className='flex gap-4'>
                    <p>Nossas redes sociais:</p>
                    <InstagramLogo size={16} className='mt-1' color="#eeeeec" />
                    <TwitterLogo size={16} className='mt-1' color="#eeeeec" />
                    <FacebookLogo size={16} className='mt-1' color="#eeeeec" />
                </div>
                
            </footer>
        </div>
        </div>
    )
}

export default Inicio;