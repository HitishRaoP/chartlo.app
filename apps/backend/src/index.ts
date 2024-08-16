require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { PORT } from './constants';
import { yellow } from 'picocolors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server is up and running');
});

app.listen(PORT, () => {
  console.log(
    `${yellow('[Express]')} server running on http://localhost:${PORT}`,
  );
});
