import React, { createContext, useReducer } from 'react';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload.items,
        totalQuantity: action.payload.totalQuantity,
        totalAmount: action.payload.totalAmount,
      };
    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      const totalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      const totalAmount = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalQuantity,
        totalAmount,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
