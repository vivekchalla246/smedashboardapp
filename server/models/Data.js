const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  date: { type: String, required: true },
  allocation: { type: Number, required: true },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
