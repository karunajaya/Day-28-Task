import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const NavBar = () => {
  const { state } = useContext(CartContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f8f9fa' }}>
      <h1>Ship-Kart</h1>
      <input
        type="text"
        placeholder="Search Products Here"
        style={{ padding: '5px 10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div style={{ position: 'relative' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#ffc107', borderRadius: '5px', border: 'none' }}>
          Cart ({state.totalQuantity})
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
