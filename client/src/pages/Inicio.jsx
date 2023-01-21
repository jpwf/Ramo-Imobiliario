import {
    Phone, InstagramLogo, TwitterLogo, FacebookLogo
    , MapPin, NavigationArrow, Door, MagnifyingGlass
} from 'phosphor-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navBar';
import SelectComponent from '../components/SelectComponent';
import notificacao from '../utils/notificacao';

function Inicio() {
    const navigate = useNavigate();
    const [district, setDistrict] = useState("");
    const [bedrooms, setBedrooms] = useState(0);
    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };
    const handleBedroomsChange = (e) => {
        setBedrooms(e.target.value);
    };

    //function to change the page to the search page using the filters
    const handleSearch = () => {
        //district are required and bedrooms are optional
        if (district === "") {
            notificacao(false, "Selecione um bairro");
            return;
        }
        //navigate to the apartment/search page
        if (bedrooms === undefined || bedrooms === "") {
            navigate(`/apartment/search?district=${district}`);
        }
        console.log('inicio:', bedrooms);
        navigate(`/apartment/search?district=${district}&numberOfBedrooms=${bedrooms}`);
    };

    return (
        <div className='flex flex-col min-h-screen bg-home bg-cover bg-no-repeat w-full'>
            <Navbar />
            <div className='flex-grow'>
                <div className='flex items-end text-3xl font-bold text-white h-[40vh] lg:h-[45vh] ml-9 lg:ml-24 '>
                    <p>
                        Encontre um lar na <br />
                        cidade do <br />
                        Rio de Janeiro
                    </p>
                </div>
                <div className='flex justify-between items-center bg-white opacity-75 rounded max-w-2xl lg:max-w-[800px] h-[113px] mt-10 lg:mt-20 mb-4 ml-9 lg:ml-24 px-5 '>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center mb-[10px] gap-1'>
                            <MapPin size={16} color="#050505" />
                            Cidade
                        </div>
                        <div className='flex py-[8.5px] items-center justify-center border rounded border-gray-800 w-[140px] h-[37.1px] text-gray-800 text-sm'>
                            Rio de Janeiro
                        </div>
                        {/* <SelectComponent label='Rio de Janeiro' className='w-[57px] h-[36px]' /> */}
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center mb-[10px] gap-1'>
                            <NavigationArrow size={16} color="#050505" />
                            Bairro
                        </div>

                        <SelectComponent districts defaultV="Selecione" selectedValue={district} onChange={handleDistrictChange} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center mb-[10px] gap-1'>
                            <Door size={16} color="#050505" />
                            Número de quartos
                        </div>
                        <SelectComponent bedrooms defaultV="Selecione" selectedValue={bedrooms} onChange={handleBedroomsChange} />
                    </div>
                    <button
                        onClick={handleSearch}
                        className='bg-blue-500 flex justify-center items-center rounded px-4 py-3 w-[100px] h-[52px] lg:-ml-2 hover:bg-blue-700'
                    >
                        <MagnifyingGlass size={24} color="#FFFFFF" />
                    </button>
                </div>
            </div>

            <footer className='flex w-full h-[96px] justify-between items-center text-white text-sm lg:text-base  bg-[#3E6EB0] px-9 lg:px-24'>
                <div className='flex items-center gap-2'>
                    <Phone size={20} className=' ' color="#eeeeec" />
                    <p>(21) 99999-9999</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-lg lg:text-xl'>Endereço</p>
                    <p className='text-xs lg:text-sm'>Rua Gen. Canabarro, 485 - Maracanã. Rio de Janeiro - RJ</p>
                    <p className='text-xs lg:text-sm'>(21)4002-8922</p>
                </div>
                <div className='flex gap-2 lg:gap-4 items-center'>
                    <p>Nossas redes sociais:</p>
                    <InstagramLogo size={16} className='' color="#eeeeec" />
                    <TwitterLogo size={16} className='' color="#eeeeec" />
                    <FacebookLogo size={16} className='' color="#eeeeec" />
                </div>

            </footer>
        </div>
    );
}

export default Inicio;