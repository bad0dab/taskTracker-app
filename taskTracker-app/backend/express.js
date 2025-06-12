import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;


const app = express();
const port = 6968;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


app.get('/', async (req, res) => {
  console.log('GET / received');
  try {
    res.send('Test risposta');
  } catch (err) {
    console.error(err);
    res.status(500).send('Errore');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
