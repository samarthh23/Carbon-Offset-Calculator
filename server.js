const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Store data in memory (replace with a database in production)
let userData = {
  travel: 0,
  electricity: 0,
  waste: 0,
  carbonFootprint: 0,
};

// Save data endpoint
app.post('/save-data', (req, res) => {
  const { travel, electricity, waste, carbonFootprint } = req.body;
  userData = { travel, electricity, waste, carbonFootprint };
  res.json({ message: 'Data saved successfully', data: userData });
});

// Get data endpoint
app.get('/get-data', (req, res) => {
  res.json(userData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});