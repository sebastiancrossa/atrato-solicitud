const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const port = 4000;
const app = express();

const dotenv = require('dotenv');
dotenv.config();

// Queries

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'atrato_user',
  password: '[m#sz[s2%XT.]Mru',
  database: 'atrato'
});

console.log(connection);

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('db connected');
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend up and running');
});

app.post('/users', (req, res) => {
  let firstName = connection.escape(req.body.firstName);
  let lastName = connection.escape(req.body.lastName);
  let email = connection.escape(req.body.email);
  let age = connection.escape(req.body.age);
  let isMarried = connection.escape(req.body.isMarried);
  let averageMonthlyIncome = connection.escape(req.body.averageMonthlyIncome);

  let query = `INSERT INTO users(firstName, lastName, email, age, isMarried, averageMonthlyIncome)\
        VALUES (${firstName}, ${lastName}, ${email}, ${age}, ${isMarried}, ${averageMontlhyIncome})`;

  connection.query(query, err => {
    if (err) {
      res.status(500).json({
        message: err
      });
    } else {
      res.status(201).json({
        firstName,
        lastName,
        email,
        age,
        isMarried,
        averageMonthlyIncome
      });
    }
  });
});

app.listen(port, () => {
  console.log('Listening on port 4000 ');
});
