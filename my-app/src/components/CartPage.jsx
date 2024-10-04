import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();

    if (cartItems.length === 0) {
        return <div>Your cart is empty</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;

