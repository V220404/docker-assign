const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', async (req, res) => {
  try {
    const response = await axios.post('http://backend:5050/submit', req.body);
    res.send("Data sent successfully to Flask backend.");
  } catch (err) {
    res.send("Error sending data: " + err.message);
  }
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
