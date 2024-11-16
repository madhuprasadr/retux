import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/cartSlice';
import { Provider } from 'react-redux';        // Import Redux Provider
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(addItem(item));
  };

  const decreaseQuantity = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total Price: ${item.totalPrice}</p>
      <button onClick={increaseQuantity}>+</button>
      <button onClick={decreaseQuantity}>-</button>
    </div>
  );
};

export default CartItem;
