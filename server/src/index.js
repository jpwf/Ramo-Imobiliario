import express from 'express';
import morgan from 'morgan';
import MongoDB from './database/MongoDB.js';

import userRoutes from './routes/userRoutes.js';
import apartmentRoutes from './routes/apartmentRoutes.js';

const app = express();

app.use(process.env.enviroment === 'development' ? morgan('dev') : morgan('combined'));
app.use(express.json());
app.mongo = new MongoDB();

app.use('/user', userRoutes);
app.use('/apartment', apartmentRoutes);

app.listen(process.env.port);
