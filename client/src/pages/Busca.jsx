//import Card from '../components/Card'
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import cardimage from '../assets/cardImage.png'
import axios from 'axios'
import AptCard from '../components/AptCard.jsx';
import SelectComponent from '../components/SelectComponent';
import PaginationLink from '../utils/Pagination';
function Busca() {
    const [apartaments, setApartaments] = useState([]);
    
    const getData = async () => {
        try {
            const res = await axios.get('db.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            setApartaments(res.data.apartaments);
            console.log(res.data.apartaments)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex justify-between px-12 lg:px-[98px] mt-16'>
                <div className='flex gap-4 md:gap-8 lg:12
                '>
                    <SelectComponent label='Bairro' value='Botafogo' />
                    <SelectComponent className='w-[140px]' label='Nº de quartos' value='100000000000000' />
                </div>
                <SelectComponent value='Mais recentes' defaultV='Mais recentes' />
            </div>
            <div className='w-screen grid grid-cols-1 justify-items-center content-start md:grid-cols-3 gap-8 md:gap-[62px] mt-8 px-14 lg:px-[106px] mb-10'>
                {apartaments && apartaments.length > 0 && apartaments.map(apartament => {
                    return(
                        <AptCard key={apartament.id}
                            img={apartament.image}
                            name={apartament.name}
                            street={apartament.address.street}
                            numberOfBedrooms={apartament.numberOfBedrooms > 1 ? `${apartament.numberOfBedrooms} Quartos` : `${apartament.numberOfBedrooms} Quarto`} 
                            price={`R$${apartament.price}`} 
                        />
                    )
                })}
            </div>
            <PaginationLink />
        </div>

    )
}

export default Busca;