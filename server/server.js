const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Data = require('./models/Data');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API route to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error: Failed to retrieve data' });
  }
});

// API route to add new data
app.post('/api/data', async (req, res) => {
  const { date, allocation } = req.body;

  // Validate input data
  if (!date || !allocation) {
    return res.status(400).json({ message: 'Please provide both date and allocation' });
  }

  try {
    const newData = new Data({ date, allocation });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: 'Server error: Failed to save data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
