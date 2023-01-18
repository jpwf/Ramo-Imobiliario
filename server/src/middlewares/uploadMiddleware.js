import ApartmentModel from '../models/Apartment.js'

export default async function create(req, res) { 
    await ApartmentModel.findById(req.params.id);

    if(!apartment){
        return res.status(401).json({ error: 'Invalid operation' });
    }

    if (req.userInfo.id != apartment.userId){
        return res.status(401).json({ error: 'Invalid operation' });
    }
}