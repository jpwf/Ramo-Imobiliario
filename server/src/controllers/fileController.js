import { MulterError } from 'multer';
import ApartmentModel from '../models/Apartment.js'

export default class FileController {
    /*static async checkUpload(res, err){
        if (err instanceof MulterError){
            return res.status(406).json({ error: err.message })
        } else if (err){
            return res.status(406).json({ error: err.message })
        }
    }*/
    
    static async create(req, res) { 
        const apartment = await ApartmentModel.findById(req.params.id);

        const Path = 'http://localhost:3000/images/' + req.file.filename
        apartment.image = Path;
    
        await apartment.save();

        return res.status(201).json({ message: 'Image uploaded successfully' });
    }
}

