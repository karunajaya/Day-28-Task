import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleIncrease = () => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity: product.quantity + 1 } });
  };

  const handleDecrease = () => {
    if (product.quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity: product.quantity - 1 } });
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default ProductCard;


