const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/printing-company', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define order schema
const orderSchema = new mongoose.Schema({
  product: String,
  designFile: String,
  shippingAddress: String,
  billingAddress: String,
  paymentMethod: String,
  status: String
});

const Order = mongoose.model('Order', orderSchema);

// Define API endpoints
app.post('/api/orders', (req, res) => {
  const order = new Order({
    product: req.body.product,
    designFile: req.body.designFile,
    shippingAddress: req.body.shippingAddress,
    billingAddress: req.body.billingAddress,
    paymentMethod: req.body.paymentMethod,
    status: 'Pending'
  });

  order.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.json({ success: false, error: err }));
});

app.get('/api/orders', (req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.json({ success: false, error: err }));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));