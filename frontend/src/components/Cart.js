// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css'; // Import CSS for styling

function Cart({ isOpen, toggleCart }) {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    if (!isOpen) return null;

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-overlay" onClick={toggleCart}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h4>{item.name}</h4>
                                        <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-total">
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                            <button className="btn clear-cart" onClick={clearCart}>Clear Cart</button>
                            <button className="btn checkout">Checkout</button>
                        </div>
                    </div>
                )}
                <button className="btn close-cart" onClick={toggleCart}>Close</button>
            </div>
        </div>
    );
}

export default Cart;