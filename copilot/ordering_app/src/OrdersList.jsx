// src/OrdersList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <ul>
      {orders.map(order => (
        <li key={order._id}>{order.details}</li>
      ))}
    </ul>
  );
}

export default OrdersList;