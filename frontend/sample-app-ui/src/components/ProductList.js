import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Adjust the import path as necessary


const products = [
  { id: 1, name: 'Cloud Audit', price: 150 },
  { id: 2, name: 'Pen Test', price: 300 },
  { id: 3, name: 'DPDP Compliance', price: 200 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ width: '70%' }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '1rem' }}>
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;