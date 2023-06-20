import express from 'express';
import cors from 'cors';

import quotes from './quotes.json';

const app = express()
app.use(cors())

const port = 3000

app.get('/quotes', (req, res) => {
  res.json(quotes);
})

app.listen(port, () => {
  console.log(`Quotes app is listening on port ${port}`)
})
