// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  details: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);