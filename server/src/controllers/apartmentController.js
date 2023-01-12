import ApartmentModel from '../models/Apartment.js';
//import UserController from './userController.js';

export default class ApartmentController {
    static async getSome(req, res) {
        const { page, limit, sortBy } = req.query;
        var value

        if (sortBy === 'cheaper')
            value = 1

        if (sortBy === 'expensive')
            value = -1

        console.log(value)
        
        try {
            const apartments = await ApartmentModel.find(buildQuery(req.query), {'address._id': 0, '__v': 0})
                .limit(limit)
                .skip((page - 1) * limit)
                .sort(sortBy === 'cheaper' || sortBy === 'expensive' ? {price: value} : {_id: -1})
            res.status(200).json(apartments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }


        function buildQuery(query) {
            const { numberOfBedrooms, district } = query;
            return {
                ...(numberOfBedrooms && { numberOfBedrooms }),
                'address.district': district
            }
        }
    }
    
    static async show(req, res) {
        try {
            const apartment = await ApartmentModel.findById(req.params.id, {'address._id': 0, '__v': 0});
            res.status(200).json(apartment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    static async create(req, res) {
        const { image, numberOfBedrooms, address, price, description } = req.body;
        try {
            const apartment = await ApartmentModel.create({ 
                numberOfBedrooms,
                image,
                address,
                price,
                description,
                userId: req.userInfo.id
            });
            res.status(201).json(apartment);
        } catch (error) {
            if (error.code === 11000)
                return res.status(400).json({ message: keyError(error.keyValue) });
            res.status(500).json({ message: error.message });
        }

        function keyError(key) {
            if (key.address) return 'Apartment already registered';
            return 'Please check your request body or contact the administrator';
        }
    }
}
