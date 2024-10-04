import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
         
            setCartItems(cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            ));
        } else {
        
            setCartItems([...cartItems, product]);
        }
    };


    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };


    const getTotalItems = () => {
        return cartItems.reduce((total, product) => total + product.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

