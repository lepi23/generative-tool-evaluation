// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Routes
app.use('/api/orders', require('./routes/orders'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});