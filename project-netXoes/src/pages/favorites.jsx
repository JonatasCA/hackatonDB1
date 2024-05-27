import React, { useEffect, useState } from 'react';
import Header from '../components/header/favorites.jsx'
import '../pages/favorites.scss'
import api from '../services/api.js';

function Favorites() {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  
    useEffect(() => {
      async function loadData() {
        try {
          const response = await api.get('produtos');
          const { result } = response.data;

          const shuffledProdutos = result.sort(() => Math.random() - 0.5); // Embaralha o resultado da API

          setProdutos(shuffledProdutos);
          setProdutosFiltrados(shuffledProdutos);

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
            <h2>Meus Favoritos</h2>
        </section>
      </React.StrictMode>
    );
}


export default Favorites