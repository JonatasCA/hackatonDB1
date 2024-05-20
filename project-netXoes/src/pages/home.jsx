import React, { useEffect, useState } from 'react';
import Header from '../components/header/home.jsx'
import Card from '../components/cards/home.jsx';
import '../pages/home.scss'
import api from '../services/api.js';

function Home() {
    const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      async function loadData() {
        try {
          const response = await api.get('produtos');
          const { result } = response.data;
          console.log('API result:', result);
          setProdutos(result);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
  
      loadData();
    }, []);
  
    return (
      <React.StrictMode>
        <Header />
        <div className='div-home'>
        {produtos && produtos.map(produto => (
          <Card produtoData={produto} key={produto.id} />
        ))}
        </div>
      </React.StrictMode>
    );
}


export default Home