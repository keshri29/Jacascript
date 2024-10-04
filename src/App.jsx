import React, { useState } from 'react';
import Cart from './component/Cart';
import Card from './component/Card';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Cart cartItems={cartItems} />
      <Card addToCart={addToCart} />
    </div>
  );
};

export default App;
