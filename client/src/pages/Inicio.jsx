import {Phone, InstagramLogo, TwitterLogo, FacebookLogo
, MapPin, NavigationArrow,  Door, MagnifyingGlass} from 'phosphor-react'
import SelectComponent from '../components/SelectComponent';
import Navbar from '../components/navBar'
function Inicio() {
    return(
            <div>
                <Navbar/>
                <div className='  bg-home  bg-cover  h-screen'>
                    
                    <div className='text-3xl font-bold text-white    items-center text-justify pt-56 ml-24 '>
                        <p>Encontre um lar na</p> 
                        <p>cidade do</p>
                        <p>Rio de Janeiro</p>
                    </div>
                    <div className='flex gap-4 bg-white opacity-75   rounded w-[800px] h-[113px]  mb-[173px] mt-20 ml-24 '>
                        <div className='flex flex-col items-center mt-5 ml-6'>
                            <div className='flex items-center mb-[10px] gap-1'>
                                <MapPin size={16} color="#050505" />
                                Cidade
                            </div>
                            
                            <SelectComponent label='Rio de Janeiro' className='w-[57px] h-[36px]'/>
                        </div>
                        <div className='flex flex-col mt-5 px-12  items-center'>
                            <div className='flex items-center gap-1 mb-[10px] '>
                                <NavigationArrow size={16}  color="#050505" />
                                Bairro
                            </div>
                            
                            <SelectComponent label='Selecione' className='w-[57px] h-[36px]'/>
                        </div>
                        <div className='flex flex-col  mt-5'>
                            <div className='flex items-center mb-[10px] gap-1'>
                                <Door size={16}  color="#050505" />
                                Número de quartos
                            </div>
                                <SelectComponent label='Selecione' className='w-[57px] h-[36px]'/>
                            </div>
                            <button className='bg-blue-500 flex justify-center items-center gap-{10px} rounded px-4 py-3 w-[100px] h-[52px] ml-10 mt-8'>
                                <MagnifyingGlass size={24} color="#FFFFFF" />
                            </button>
                        

                    
                    </div>
                    <footer className='flex w-full h-[96px]  justify-between items-center text-white  bg-[#3E6EB0] px-24'>
                        <div className='flex'>
                            <Phone size={20} className='mt-1' color="#eeeeec"/>
                            (21)99999-9999
                        </div>
                        <div className='flex flex-col items-center  '>
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