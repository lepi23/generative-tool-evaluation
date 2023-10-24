// src/App.js
import React from 'react';
import OrderForm from './OrderForm';
import OrdersList from './OrdersList';

function App() {
  return (
    <div className="App">
      <OrderForm />
      <OrdersList />
    </div>
  );
}

export default App;