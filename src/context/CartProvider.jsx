/*
import {CartContext} from './CartContext'
import { useReducer } from 'react'


export const CartProvider = ({children}) => {

    const initialState = [];


    const cartReducer = (state = initialState, action = {}) => {
        switch (action.type) {
         case '[CART] Add Product':
             return [...state, action.payload]
             
         case '[CART] Remove Product':
             return state.filter(product => product.id !== action.payload)
             
         case '[CART] Increment Product': // TODO: falta incrementar la cantidad
             break;
         case '[CART] Decrement Product': // TODO: falta decrementar la cantidad
             break;
        
         default:
             return state
             
        }
     }

     const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CART] Add Product',
            payload: product
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
    const action = {
        type: '[CART]  Remove Product',
        payload: id
    }
        dispatch(action)
        }
        const incrementQuantity = (id) => {
    const action = {
        type: '[CART] Increment Quantity Product',
        payload: id
    }
        dispatch(action)
        }
        const decrementQuantity = (id) => {
    const action = {
        type: '[CART] Decrement QuantityProduct',
        payload: id
    }
        dispatch(action)
    }


  return (
    <CartContext.Provider value={{shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
*/

import { CartContext } from './CartContext';
import { useReducer } from 'react';

export const CartProvider = ({ children }) => {
  const initialState = [];

  const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[CART] Add Product':
        // Verifica si el producto ya está en el carrito
        const productExist = state.find(product => product.id === action.payload.id);
        if (productExist) {
          return state.map(product =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        }
        return [...state, { ...action.payload, quantity: 1 }];
        
      case '[CART] Remove Product':
        return state.filter(product => product.id !== action.payload);

      case '[CART] Increment Quantity Product':
        return state.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

      case '[CART] Decrement Quantity Product':
        return state.map(product =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity,
              }
            : product
        );

      default:
        return state;
    }
  };

  const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) => {
    const action = {
      type: '[CART] Add Product',
      payload: product,
    };
    dispatch(action);
  };

  const removeProduct = (id) => {
    const action = {
      type: '[CART] Remove Product',
      payload: id,
    };
    dispatch(action);
  };

  const incrementQuantity = (id) => {
    const action = {
      type: '[CART] Increment Quantity Product',
      payload: id,
    };
    dispatch(action);
  };

  const decrementQuantity = (id) => {
    const action = {
      type: '[CART] Decrement Quantity Product',
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

