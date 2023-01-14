import { useEffect, useState, useId, useMemo } from 'react';
import axios from 'axios'
import AptCard from '../components/AptCard.jsx';
import SelectComponent from '../components/SelectComponent';
import PaginationLink from '../utils/Pagination';
import navBar from '../components/navBar'

function Busca() {
    const [apartaments, setApartaments] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get('db.json', {
                headers: {'Content-Type': 'application/json',}
            });
            setApartaments(res.data.apartaments);
        } catch (err) {
            console.log(err);
        }
    };

    const filterItems = useMemo(() => {
        const bedroomsValues = [];
        const districtValues = [];

        apartaments.map((apartament, index) => {
            return (
                bedroomsValues[index] = parseInt(apartament.numberOfBedrooms),
                districtValues[index] = apartament.address.district
            )
        })
        const bedroomsValuesUnique = [...new Set(bedroomsValues)]
        bedroomsValuesUnique.sort()
        const districtValuesUnique = [...new Set(districtValues)]
        districtValuesUnique.sort()
        return { bedroomsValuesUnique, districtValuesUnique };
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        
        <div className='min-h-screen max-w-none flex flex-col items-center'>
            <navBar/>
            <div className='w-full flex justify-between px-14 lg:px-[106px] mt-16'>
                <div className='flex gap-4 md:gap-8 lg:12'>
                    <SelectComponent label='Bairro' districts={filterItems.districtValuesUnique} />
                    <SelectComponent className='w-[140px]' label='Nº de quartos' bedrooms={filterItems.bedroomsValuesUnique} />
                </div>
                <SelectComponent values={''} defaultV='Mais recentes' />
            </div>
            <div className='w-full grid grid-cols-1 justify-items-center content-start md:grid-cols-3 gap-8 md:gap-[62px] mt-8 px-14 lg:px-[106px] mb-10'>
                {apartaments && apartaments.length > 0 && apartaments.slice(0, 6).map((apartament, index) => {
                    return (
                        <div className='w-full' key={index}>
                            <AptCard 
                                key={apartament.id}
                                img={apartament.image}
                                owner={apartament.name}
                                street={apartament.address.street}
                                description={apartament.description}
                                numberOfBedrooms={apartament.numberOfBedrooms}
                                price={Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(apartament.price)}
                                link={`/busca/${index}`}
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