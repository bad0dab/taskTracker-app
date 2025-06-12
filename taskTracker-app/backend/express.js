import express from 'express';
import { Client } from 'pg';
import cors from 'cors';

const app = express();
const port = 6968;

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 6969,        
  password: '1234',
  database: 'postgres'
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Database connection error:', err.stack));

app.use(cors({
  origin: 'http://localhost:6969'
}));
app.use(express.json());

app.get('/task:id', async (req, res) => {
    const id = req.params.id;
  try {
    const result = await client.query('SELECT * FROM tasks');
    console.log(result.rows);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Errore');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
