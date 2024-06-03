import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/home';
import Categories from './pages/categoriesPage';
import Favorites from './pages/favorites';
import Login from './pages/loginPage';
import FavoritesProvider from './contexts/favorites';
import ProductDetails from './pages/productDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </FavoritesProvider>
  </BrowserRouter>
);