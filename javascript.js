const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database: ', error);
  } else {
    console.log('Connected to database.');
  }
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/pharmacies', (req, res) => {
  const { name, address, city, state, zip_code, phone } = req.body;

  const query = 'INSERT INTO pharmacies (name, address, city, state, zip_code, phone) VALUES (?, ?, ?, ?, ?, ?)';

  connection.query(query, [name, address, city, state, zip_code, phone], (error, results) => {
    if (error) {
      console.error('Error adding pharmacy: ', error);
      res.status(500).send('Error adding pharmacy.');
    } else {
      const pharmacy_id = results.insertId;
      res.json({ pharmacy_id, name, address, city, state, zip_code, phone });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
