// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/Products';
import './ProductList.css'; // Import CSS for styling

function ProductList() {
    return (
        <div className='product-list'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;