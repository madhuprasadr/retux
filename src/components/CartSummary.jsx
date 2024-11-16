import React from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';        // Import Redux Provider

const CartSummary = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <div className="cart-summary">
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Amount: ${totalAmount}</h2>
    </div>
  );
};

export default CartSummary;
