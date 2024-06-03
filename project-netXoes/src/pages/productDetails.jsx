import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Product from '../components/cards/products';

function ProductDetails() {

  return (
    <React.StrictMode>
    <Header/>
    <Product/>
    </React.StrictMode>
  );
}

export default ProductDetails;