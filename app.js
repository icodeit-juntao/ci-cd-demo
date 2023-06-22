import express from 'express';
import cors from 'cors';
import pickRandom from './pick-random';

import quotes from './quotes.json';

const app = express();
app.use(cors());

app.get('/quotes', (req, res) => {
  const count = req.query.count || 10;
  const randomQuotes = pickRandom(quotes, count);
  res.json(randomQuotes);
});

export default app;