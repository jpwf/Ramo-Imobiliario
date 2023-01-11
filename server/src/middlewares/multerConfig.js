import { FILE } from "dns"
import multer from "multer"
import path from "path" 

export const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, path.resolve('public'))
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime()

        const extensaoArquivo = file.originalname.split('.')[1];

        callback(null, `${time}.${extensaoArquivo}`)
    },
})

export const fileFilter = (req, file, callback) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        callback(null, true)
    }
    else{
        callback(null, false)
    }
};

export const registerAuth = (req, res, next) => {
    if (req.userInfo.id !== ApartmentModel.userId){
        return res.status(401).json({ error: 'Invalid operation' });
    }
}
