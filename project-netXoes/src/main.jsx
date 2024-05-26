import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/home';
import Favorites from './pages/favorites';
// import Contact from './pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
);