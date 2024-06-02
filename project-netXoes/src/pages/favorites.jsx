import React, { useEffect, useState } from 'react';
import Header from '../components/header/header.jsx'
// import '../pages/favorites.scss'
import '../pages/favorites.scss'
import Card from '../components/cards/cards.jsx';
import { useFavoriteContext } from '../contexts/favorites.jsx';
import FavoriteButton from '../components/cards/favoriteButton.jsx';

function Favorites() {
  const { favorite } = useFavoriteContext()

  console.log(favorite)

    return (
      <React.StrictMode>
      <Header />
      <section>
        <h2>Meus Favoritos</h2>
        <div className='favorites-list'>
          {favorite.length > 0 ? (
            favorite.map(produto => (
              <Card produtoData={produto} key={produto.id} />
            ))
          ) : (
            <p>Você não tem produtos favoritos.</p>
          )}
        </div>
      </section>
    </React.StrictMode>
    );
}


export default Favorites