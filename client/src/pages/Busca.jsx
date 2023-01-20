import { useEffect, useState, useId, useMemo } from 'react';
import AptCard from '../components/AptCard.jsx';
import SelectComponent from '../components/SelectComponent';
import notificacao from '../utils/notificacao.js';
import { LinearProgress, Pagination } from '@mui/material';
import { ApartmentsService } from '../services/api/apartments/ApartmentsService.js';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/navBar.jsx';

//Component to show the search results
function Busca() {
    const [searchParams, setSearchParams] = useSearchParams({});

    const [apartments, setApartments] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    //filters
    const district = useMemo(() => searchParams.get('district') || 'Flamengo', [searchParams]);
    const page = useMemo(() => searchParams.get('page') || '1' , [searchParams]);
    const numberOfBedrooms = useMemo(() => searchParams.get('numberOfBedrooms'), [searchParams]);
    const sortBy = useMemo(() => searchParams.get('sortBy'), [searchParams]);

    //function to handle the change in the select component
    const handleDistrictChange = (e) => {
        const { name, value } = e.target;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(name, value);
        setSearchParams(newSearchParams);
    };
    //handle the change in the bedrooms select component and set de searchParams preserving the other values
    const handleBedroomsChange = (e) => {
        const { name, value } = e.target;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(name, value);
        setSearchParams(newSearchParams);
    };
    const handleSortByChange = (e) => {
        const { name, value } = e.target;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(name, value);
        setSearchParams(newSearchParams);
    };

    //function to handle the change in the pagination component
    const handlePaginationChange = (_, value) => {
        // cria uma cópia do objeto searchParams
        const newSearchParams = new URLSearchParams(searchParams);
        // adiciona o novo valor de página à cópia
        newSearchParams.set("page", value);
        // atualiza o estado com a cópia
        setSearchParams(newSearchParams);
    };

    //getting the data from the api 
    const getData = async () => {
        try {
            // request to the api to get the apartments
            const res = await ApartmentsService.getAll({ district, page, numberOfBedrooms, sortBy });
            // setting the apartments state with the data from the api
            setApartments(res.data);
            setTotalCount(res.totalCount);
            // if there is no data, it will show a notification
            if (res.data.length === 0) {
                notificacao(false, 'Não foram encontrados apartamentos com essas características');
                //returning to the first page
                setTimeout(() => setSearchParams({ ...searchParams, district, page: 1 }), 3000);
            }
        } catch (err) {
            notificacao(false, 'Erro ao buscar os apartamentos');
            console.log(err);
        }
    };

    // useEffect to get the data from the api
    useEffect(() => {
        getData();
    }, [district, page, numberOfBedrooms, sortBy]);


    return (
        <div className='min-h-screen max-w-none flex flex-col items-center'>
            <Navbar />
            <div className='w-full flex justify-between px-14 lg:px-[106px] mt-16'>
                {/* passing the values to the select component */}
                <div className='flex gap-4 md:gap-8 lg:12'>
                    <SelectComponent name='district' label='Bairro' districts selectedValue={district} onChange={handleDistrictChange} />
                    <SelectComponent name='numberOfBedrooms' label='Nº de quartos' bedrooms selectedValue={numberOfBedrooms} onChange={handleBedroomsChange} />
                </div>
                <SelectComponent name='sortBy' label='Ordenar' values selectedValue={sortBy} onChange={handleSortByChange} />
            </div>
            {/* if there is no data, it will show a loading message */}
            <div className='w-full grid grid-cols-1 justify-items-center content-start md:grid-cols-3 gap-8 md:gap-[62px] mt-8 px-14 lg:px-[106px] mb-10'>
                {apartments && apartments.length > 0 && apartments.slice(0, 6).map((apartment, index) => {
                    {console.log(apartment.image)}
                    return (
                        <div className='w-full' key={index}>
                            {/* passing the data to the card component */}
                            <AptCard
                                key={apartment.id}
                                img={apartment.image}
                                owner={apartment.userId.name}
                                street={apartment.address.street}
                                description={apartment.description}
                                numberOfBedrooms={apartment.numberOfBedrooms}
                                price={Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(apartment.price)}
                                link={`/busca/${index}`}
                            />
                        </div>
                    )
                })}
            </div>
            {(totalCount > 0 && totalCount > 6) && (
                <Pagination
                    className='mb-16'
                    color='primary'
                    size='large'
                    shape='rounded'
                    defaultPage={1}
                    page={parseInt(page)}
                    count={Math.ceil(totalCount/6)} //Math.ceil(apartments.length / 6)
                    onChange={handlePaginationChange}
                />
            )}
            
        </div>
    )
}

export default Busca;