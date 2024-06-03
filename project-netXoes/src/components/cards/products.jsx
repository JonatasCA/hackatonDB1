import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './products.scss';

function Product() {
  const { id } = useParams(); 
  const [produto, setProduto] = useState(null);


  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`produtos/${id}`);
        setProduto(response.data); 
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  function calcularParcelas(preco) {
    const taxaJurosAm = 1.99; 
    const valorMinimoParcela = 10; 

    const opcoesParcelamento = [];

    for (let i = 2; i <= 12; i++) { 
      let valorParcela = preco / i;
      let valorTotal = 0;

      for (let j = 0; j < i; j++) {
        valorParcela += (valorParcela * taxaJurosAm / 100);
        valorTotal += valorParcela;
      }

      if (valorParcela >= valorMinimoParcela) {
        opcoesParcelamento.push({
          parcelas: i,
          valorParcela: valorParcela.toFixed(2),
          valorTotal: valorTotal.toFixed(2)
        });
      }
    }

    return opcoesParcelamento;
  }

  return (
    <div className="product-container">
      <div className="product-details">
        <h1 className="product-name"><strong>{produto.result.name}</strong></h1>
        <p className="product-description">{produto.result.description}</p>
        <div className="product-combo">
        <div>
        <p className="product-price">R$ {produto.result.price}</p>
        <p className="product-subprice"><strong>A vista ou em até 12x : </strong></p>
          <ul className="product-installment">
            {calcularParcelas(produto.result.price).map(opcao => (
              <li key={opcao.parcelas}>
                {opcao.parcelas}x de R$ {opcao.valorParcela} - Total: R$ {opcao.valorTotal}
              </li>
            ))}
          </ul>
        </div>
          <button className="btn btn-2 icon-info">Comprar</button>
        </div>
      </div>
      <div className="product-image-container">
        <img src={`../products/${produto.result.image}`} alt={produto.result.name} className='product-image'/>
      </div>
    </div>
  );
}

export default Product;