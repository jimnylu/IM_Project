// src/components/Banner.js
import React from 'react';
import './Banner.css'; // Import CSS for styling

function Banner() {
    return (
        <div className='banner'>
            <h1 className='banner-title'>Welcome to Our Shop!</h1>
            <p className='banner-subtitle'>Discover the best products at unbeatable prices.</p>
            <button className='btn shop-now'>Shop Now</button>
        </div>
    );
}

export default Banner;