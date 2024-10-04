import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems } = useCart();

    if (cartItems.length === 0) {
        return <div className="empty-cart">Your cart is empty</div>;
    }

    return (
        <div className="container cart mt-5">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={`http://127.0.0.1:8000${item.images[0].image}`} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h5>{item.name}</h5>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ₹{item.price}</p>
                            <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;






