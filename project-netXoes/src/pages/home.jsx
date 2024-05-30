import React, { useEffect, useState } from 'react';
import Header from '../components/header/header.jsx'
import Card from '../components/cards/cards.jsx';
import '../pages/home.scss'
import api from '../services/api.js';

function Home() {
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
        <div className='div-home'>
        {produtosFiltrados && produtosFiltrados.map(produto => (
          <Card produtoData={produto} key={produto.id} />
        ))}
        </div>
      </React.StrictMode>
    );
}


export default Home