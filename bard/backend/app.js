// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost:27017/printing-company');

// Define the product model
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});
const Product = mongoose.model('Product', ProductSchema);

// Define the order model
const OrderSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  products: [ProductSchema],
  total: Number,
  status: String,
});
const Order = mongoose.model('Order', OrderSchema);

// Define the REST API endpoints
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/orders', async (req, res) => {
  const order = new Order({
    customerName: req.body.customerName,
    customerEmail: req.body.customerEmail,
    products: req.body.products,
    total: req.body.total,
    status: 'Pending',
  });

  await order.save();

  res.json(order);
});

app.get('/orders/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});