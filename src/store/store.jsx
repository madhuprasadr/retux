import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Import your cart slice

// Create and configure the store with the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,  // Add your cart slice reducer to the store
  },
});

export default store;
