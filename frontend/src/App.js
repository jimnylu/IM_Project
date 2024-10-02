import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './Signup';
import Login from './Login';
import './App.css'; // Import global CSS

function App() {
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    {/* Add more routes as needed */}
                </Routes>
            </BrowserRouter>
        
    );
}

export default App;