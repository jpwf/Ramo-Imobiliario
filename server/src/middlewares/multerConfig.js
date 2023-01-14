import { FILE } from "dns"
import multer from "multer"
import path from "path" 
import ApartmentModel from '../models/Apartment.js'

export const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, path.resolve('public'))
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime()

        const extensaoArquivo = file.originalname.split('.');

        const tamanho = extensaoArquivo.length

        callback(null, `${time}.${extensaoArquivo[tamanho - 1]}`)
    },
})

export const fileFilter = (req, file, callback) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        callback(null, true)
    }
    else{
        callback(null, false)
        return callback(new Error("Ivalid file Type"))
    }
};

export const uploadAuth = async (req, res, callback) => {

    const apartment = await ApartmentModel.findById(req.params.id);

    if(!apartment){
        return res.status(401).json({ error: 'Invalid operation' });
    }

    if (req.userInfo.id != apartment.userId){
        return res.status(401).json({ error: 'Invalid operation' });
    }

    callback(null, true)
}
