import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import MongoDB from './database/MongoDB.js';

import userRoutes from './routes/userRoutes.js';
import apartmentRoutes from './routes/apartmentRoutes.js';

const app = express();

app.use(cors());
app.use(helmet());

app.use(process.env.enviroment === 'development' ? morgan('dev') : morgan('combined'));
app.use(express.json());
app.mongo = new MongoDB();

app.use('/user', userRoutes);
app.use('/apartment', apartmentRoutes);
app.use('/images', express.static('public/images'))

app.listen(process.env.port);
