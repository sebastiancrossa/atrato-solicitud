const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const port = 4000;
const app = express();

// Queries

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'atrato_user',
  password: process.env.DATABASE_PASSWORD,
  database: 'atrato'
});

console.log(connection);

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend up and running');
});

app.get('/', (req, res) => {
  res.send('Backend up and running');
});

app.listen(port, () => {
  console.log('Listening on port 4000 ');
});
