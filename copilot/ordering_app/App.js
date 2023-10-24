import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [product, setProduct] = useState('');
  const [designFile, setDesignFile] = useState(null);
  const [shippingAddress, setShippingAddress] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product', product);
    formData.append('designFile', designFile);
    formData.append('shippingAddress', shippingAddress);
    formData.append('billingAddress', billingAddress);
    formData.append('paymentMethod', paymentMethod);

    try {
      await axios.post('/api/orders', formData);
      alert('Order submitted successfully!');
    } catch (err) {
      console.log(err);
      alert('Error submitting order. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product:
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      </label>
      <br />
      <label>
        Design file:
        <input type="file" onChange={(e) => setDesignFile(e.target.files[0])} />
      </label>
      <br />
      <label>
        Shipping address:
        <textarea value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Billing address:
        <textarea value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Payment method:
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit-card">Credit card</option>
          <option value="paypal">PayPal</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit order</button>
    </form>
  );
};

export default OrderForm;