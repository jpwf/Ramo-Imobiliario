import { MulterError } from 'multer';
import ApartmentModel from '../models/Apartment.js'

export default class FileController {
    static async create(req, res) { 
        const apartment = await ApartmentModel.findById(req.params.id);
        
        apartment.image = req.file.filename;
    
        await apartment.save();

        return res.status(201).json({ message: 'Image uploaded successfully' });
    }
}

