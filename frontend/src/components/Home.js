// src/components/Home.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ProductList from './ProductList';
import Footer from './Footer';
import Cart from './Cart';
import './Home'; // Import CSS for additional styling if needed

function Home() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <Navbar toggleCart={toggleCart} />
            <Banner />
            <ProductList />
            <Footer />
            <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
        </div>
    );
}

export default Home;