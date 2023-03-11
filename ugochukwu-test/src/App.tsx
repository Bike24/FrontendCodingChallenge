import React, { useEffect } from 'react';
import Products from './data/products.json';
import { useDispatch } from 'react-redux';
import { addProducts } from './app/slices/productsSlice';
import TopComponent from './components/TopComponent';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProducts(Products))
  }, [])

  return (
    <div>
      <TopComponent />
    </div>
  );
}

export default App;
