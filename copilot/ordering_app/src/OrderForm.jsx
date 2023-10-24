// src/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [details, setDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', { details });
      setDetails('');
      // Refresh orders (you might need to use React context or state management)
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Order details"
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
//Teddy2
export default OrderForm;