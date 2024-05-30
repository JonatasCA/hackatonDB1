import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Details from './pages/details';
import Categories from './pages/categories';
// import Contact from './pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details" element={<Details />} />
            <Route path="/categories" element={<Categories />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
);