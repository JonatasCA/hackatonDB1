import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'
import Home from './pages/home';

// Inicialize a raiz apenas uma vez e armazene a referência
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Home />);