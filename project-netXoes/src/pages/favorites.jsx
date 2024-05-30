import React, { useEffect, useState } from 'react';
import Header from '../components/header/header.jsx'
import '../pages/favorites.scss'
import api from '../services/api.js';

function Favorites() {

    return (
      <React.StrictMode>
        <Header />
        <section>
            <h2>Meus Favoritos</h2>
        </section>
      </React.StrictMode>
    );
}


export default Favorites