import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [],  // Array to hold items in the cart
  totalQuantity: 0,  // Track the total quantity of items in the cart
  totalAmount: 0,    // Track the total cost of items in the cart
};

// Create a slice for cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
        state.totalAmount += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalQuantity++;
        state.totalAmount += newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
