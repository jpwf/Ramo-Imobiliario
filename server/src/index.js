import express from 'express';
import morgan from 'morgan';
import MongoDB from './database/mongo.js';
const app = express();

app.use(process.env.enviroment === 'development' ? morgan('dev') : morgan('combined'));
app.mongoose = new MongoDB();
app.get('/', (req, res) => {
  return res.send('Hello world');
})

app.listen(process.env.port);
