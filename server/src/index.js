import express from 'express';
import morgan from 'morgan';
const app = express();
import connectDatabase from './database/db.js'

app.use(morgan('dev'));
app.get('/', (req, res) => {
  return res.send('Hello world');
})

connectDatabase()

app.listen(3000);

