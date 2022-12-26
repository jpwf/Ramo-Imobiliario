import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));
app.get('/', (req, res) => {
  return res.send('Hello world');
})

app.listen(3000);

