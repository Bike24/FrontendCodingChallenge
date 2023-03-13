import React, { useEffect } from 'react';
import Products from './data/products.json';
import { useDispatch } from 'react-redux';
import { addProducts } from './app/slices/productsSlice';
import ProductSection from './features/ProductSection';
import CartSection from './features/CartSection';
import TotalSection from './features/TotalSection';
import MessageComp from './components/MessageComp';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProducts(Products))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <MessageComp />
      <ProductSection />
      <CartSection />
      <TotalSection />
    </div>
  );
}

export default App;
