const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Data = require('./models/Data');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedData = [
  { date: '2024-08-01', allocation: 50 },
  { date: '2024-08-02', allocation: 60 },
  { date: '2024-08-03', allocation: 70 },
];

const importData = async () => {
  try {
    await Data.deleteMany();
    await Data.insertMany(seedData);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();
