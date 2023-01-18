import express from 'express';
import morgan from 'morgan';
import MongoDB from './database/MongoDB.js';
import cors from 'cors'

import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors())

app.use(process.env.enviroment === 'development' ? morgan('dev') : morgan('combined'));
app.use(express.json());
app.mongoose = new MongoDB();

app.use('/user', userRoutes);
app.use('/login', userRoutes);


app.listen(process.env.port);
