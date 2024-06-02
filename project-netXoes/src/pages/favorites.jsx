import React, { useEffect, useState } from 'react';
import Header from '../components/header/header.jsx';
import '../pages/favorites.scss';
import Card from '../components/cards/cards.jsx';
import { useFavoriteContext } from '../contexts/favorites.jsx';
import api from '../services/api.js';

function Favorites() {
  const { favorite } = useFavoriteContext();
  
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  
  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get('produtos');
        const { result } = response.data;
  
        console.log(result); // Verifique os dados aqui
  
  
        setProdutos(result);
        setProdutosFiltrados(result);
  
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }
  
    loadData();
  }, []);

  return (
    <React.StrictMode>
      <Header produtos={produtos} setProdutosFiltrados={setProdutosFiltrados}/>
      <section>
        <h2 className='title'>Meus Favoritos</h2>
        <div className='favorites-list'>
          {favorite.length > 0 ? (
            favorite.map(produto => (
              <Card produtoData={produto} key={produto.id} />
            ))
          ) : (
            <p className='subtitle'>Você não tem produtos favoritos.</p>
          )}
        </div>
      </section>
    </React.StrictMode>
  );
}

export default Favorites;