// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './Navbar.css'; // Import CSS for styling

function Navbar({ toggleCart }) {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-cart" onClick={toggleCart}>
                🛒 <span className="cart-count">{cartCount}</span>
            </div>
        </nav>
    );
}

export default Navbar;