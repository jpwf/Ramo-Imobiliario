import { createUrl, get } from "../axios-config"

//functio to get all apartments from api
const getAll = async (props) => {
    if(!props.page) props.page = 1;
    if(!props.limit) props.limit = 6;
    if(!props.sortBy) props.sortBy = 'newer';
    if(!props.numberOfBedrooms) props.numberOfBedrooms = 0;
    var urlRelativa = `/apartment/search?district=${props.district}&page=${props.page}&limit=${props.limit}&sortBy=${props.sortBy}`; 
    if(props.numberOfBedrooms != 0) {
        urlRelativa = `/apartment/search?district=${props.district}&page=${props.page}&limit=${props.limit}&sortBy=${props.sortBy}&numberOfBedrooms=${props.numberOfBedrooms}`;
    }
    try {
        const {data, headers} = await get(createUrl(urlRelativa));
        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count']),
            };
        }
        
        return new Error('Erro ao listar os registros.');
    } catch (error) {
        return new Error(error.message || 'Erro ao listar os registros.');
    }
};


const create = async () => {
    try {
        
    } catch (error) {
        
    }
};

export const ApartmentsService = {
    getAll,
    create,
};