// src/components/ProductCard.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './ProductCard.css'; // Import CSS for styling

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} className='product-image' />
            <h2 className='product-name'>{product.name}</h2>
            <p className='product-price'>${product.price.toFixed(2)}</p>
            <button className='btn add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;