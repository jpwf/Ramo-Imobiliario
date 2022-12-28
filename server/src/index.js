import express from 'express';
import morgan from 'morgan';
import MongoDB from './database/mongo.js';
const app = express();

app.use(morgan('dev'));
app.mongoose = new MongoDB();
app.get('/', (req, res) => {
  return res.send('Hello world');
})

app.listen(process.env.port);
