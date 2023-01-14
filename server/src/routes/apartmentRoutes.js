import { Router } from 'express';
import Joi from 'joi';
import authMiddleware from '../middlewares/authMiddleware.js';
import apartmentController from '../controllers/apartmentController.js';
import multer, { MulterError } from 'multer';
import { storage, fileFilter, uploadAuth } from '../middlewares/multerConfig.js';
//import UserController from '../controllers/userController';

const router = Router();

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3.5
    },
    fileFilter: fileFilter
}).single('image');

router.post('/publish', authMiddleware, (req, res, next) => {
    const schema = Joi.object({
        numberOfBedrooms: Joi.number().min(1).max(20).required(),
        address: Joi.object({
            street: Joi.string().min(3).max(128).required(),
            number: Joi.string().min(1).max(10).required(),
            district: Joi.string().min(3).max(20).required(),
            complement: Joi.string().max(100),
        }),
        image: Joi.string(),
        price: Joi.number().min(1).max(300000000).required(),
        description: Joi.string().min(3).max(1000).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    return next();
}, apartmentController.create);

router.post('/upload/:id', authMiddleware, uploadAuth, (req, res) => {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError){
            return res.status(406).json({ error: err.message })
        }
        else if (err){
            return res.status(406).json({ error: err.message })
        }
        
        return res.status(200).json({message: 'Successfully uploaded'})
    })
})

router.get('/search', (req, res, next) => {
    const schema = Joi.object({
        numberOfBedrooms: Joi.number().min(1).max(20),
        district: Joi.string().min(3).max(20).required(),
        sortBy: Joi.string().valid('newer', 'cheaper', 'expensive').default('newer'),
        page: Joi.number().min(1).default(1),
        limit: Joi.number().min(1).max(100).default(20)
    });

    const { error } = schema.validate(req.query);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    return next();
}, apartmentController.getSome);

router.get('/:id', apartmentController.show);

export default router;
