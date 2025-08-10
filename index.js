const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'testdb',
  password: 'postgres',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Hello from Docker! DB time: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

