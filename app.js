import express from 'express';
import cors from 'cors';

import quotes from './quotes.json';

const app = express();
app.use(cors());

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

export default app;