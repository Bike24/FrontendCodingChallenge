import React, { useEffect } from 'react';
import Products from './data/products.json';
import { useDispatch } from 'react-redux';
import { addProducts } from './app/slices/productsSlice';
import TopComponent from './components/TopComponent';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('1', Products)
    // const arr:Product[]  = [];
    // Products.forEach(({ id, productName, maxAmount, taxRate, price }) => {
    //   arr.push({
    //     id,
    //     productName,
    //     maxAmount,
    //     price,
    //     taxRate
    //   })
    // })
    // console.log('2', arr)
    dispatch(addProducts(Products))
  }, [])

  return (
    <div>
      <TopComponent />
    </div>
  );
}

export default App;
