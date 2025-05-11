import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartSidebar() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ width: '30%', background: '#f5f5f5', padding: '1rem' }}>
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map(item => (
        <div key={item.id}>
          <strong>{item.name}</strong>
          <p>₹{item.price} x {item.quantity}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h4>Total: ₹{total}</h4>
    </div>
  );
}

export default CartSidebar;
