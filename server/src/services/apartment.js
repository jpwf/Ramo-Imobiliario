//import { ApartmentModel } from '../models/Apartment'
import UserModel from '../models/User.js';

export const getApartaments = async (name, email) => {

    if (!name){
       return false;
    }

    if (!email){
        return await UserModel.find({ name: name }, {__v: 0})
    }

    return await UserModel.find({ name: name, email: email}, {__v: 0}) //.sort({_id: -1}) para pegar o mais recente;
};

