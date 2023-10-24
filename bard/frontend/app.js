// App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = () => {
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {renderProducts()}
    </div>
  );
};

export default App;