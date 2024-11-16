import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { Provider } from 'react-redux';        // Import Redux Provider

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary />
    </div>
  );
};

export default Cart;
