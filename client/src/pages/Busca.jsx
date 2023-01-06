//import Card from '../components/Card'
// import { Pagination } from '@mui/material';
import { useEffect, useState, useId, useMemo } from 'react';
// import cardimage from '../assets/cardImage.png'
import axios from 'axios'
import AptCard from '../components/AptCard.jsx';
import SelectComponent from '../components/SelectComponent';
import PaginationLink from '../utils/Pagination';
import BasicModal from '../components/Modal';


function Busca() {
    const [apartaments, setApartaments] = useState([]);
    const id = useId();

    const getData = async () => {
        try {
            const res = await axios.get('db.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            setApartaments(res.data.apartaments);
        } catch (err) {
            console.log(err);
        }
    };

    const filterItems = useMemo(() => {
        const bedroomsValues = [];
        const districtValues = [];

        apartaments.map(( apartament, index ) => {
            return(
                bedroomsValues[index] = parseInt(apartament.numberOfBedrooms),
                districtValues[index] = apartament.address.district
                )
            })
        const bedroomsValuesUnique = [...new Set(bedroomsValues)]
        bedroomsValuesUnique.sort()
        const districtValuesUnique = [...new Set(districtValues)]
        districtValuesUnique.sort()
        return{bedroomsValuesUnique, districtValuesUnique};
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='min-h-screen w-screen flex flex-col items-center'>
            <div className='w-screen flex justify-between px-14 lg:px-[106px] mt-16'>
                <div className='flex gap-4 md:gap-8 lg:12'>
                    <SelectComponent label='Bairro' values={filterItems.districtValuesUnique} />
                    <SelectComponent className='w-[140px]' label='Nº de quartos' values={filterItems.bedroomsValuesUnique} />
                </div>
                <SelectComponent values={''} defaultV='Mais recentes' />
            </div>
            <div className='w-screen grid grid-cols-1 justify-items-center content-start md:grid-cols-3 gap-8 md:gap-[62px] mt-8 px-14 lg:px-[106px] mb-10'>
                {apartaments && apartaments.length > 0 && apartaments.slice(0, 6).map(apartament => {
                    return (
                        <div className='w-full'>
                            <AptCard key={apartament.id}
                                img={apartament.image}
                                name={apartament.name}
                                street={apartament.address.street}
                                numberOfBedrooms={apartament.numberOfBedrooms > 1 ? `${apartament.numberOfBedrooms} Quartos` : `${apartament.numberOfBedrooms} Quarto`}
                                price={`R$${apartament.price}`}
                                
                                
                            />
                            
                            <BasicModal
                                key={id}
                                img={apartament.image}
                                name={apartament.name}
                                street={apartament.address.street}
                                description={apartament.description}
                                numberOfBedrooms={apartament.numberOfBedrooms > 1 ? `${apartament.numberOfBedrooms} Quartos` : `${apartament.numberOfBedrooms} Quarto`}
                                price={`R$${apartament.price}`}
                                
                            />
                        </div>
                    )
                })}
            </div>
            <PaginationLink />
        </div>

    )
}

export default Busca;