import multer from "multer"
import path from "path" 

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('public/images'))
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        const extensaoArquivo = file.originalname.split('.');
        const tamanho = extensaoArquivo.length;

        callback(null, `${time}.${extensaoArquivo[tamanho - 1]}`);
    },
})

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        callback(null, true);
    }
    else{
        callback(null, false)
        return callback(new Error('Ivalid file Type'));
    }
};

export const upload = multer({ 
    storage,
    limits: {
        fileSize: 1024 * 1024 * 3.5
    },
    fileFilter
}).single('image');

