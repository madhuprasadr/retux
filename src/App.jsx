import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cart from './components/Cart';  // Import Cart component
import { addItem } from './store/cartSlice';  // Import addItem action from Redux slice
import products from './data/products.json';  // Import the products JSON data


const App = () => {
  const dispatch = useDispatch();

  // Populate the cart with initial data (just for demonstration purposes)
  useEffect(() => {
    products.products.forEach((product) => {
      dispatch(addItem(product));  // Add all products to cart initially
    });
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <Cart />  {/* Render the Cart component */}
      </main>
    </div>
  );
};

export default App;
