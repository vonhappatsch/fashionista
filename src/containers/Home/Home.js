import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/actions';
import { productsOnSale } from '../../actions/actions';
import { search } from '../../actions/actions';
import { newCollection } from '../../actions/actions';

import './style.css';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredProducts = useSelector(store => store.catalog.filteredProducts);
  useEffect(() => {
    console.log(filteredProducts)
  })
  const total = filteredProducts.length;

  return (
    <>
      <Navbar 
        onChange={e => dispatch(search(e.target.value.toLowerCase()))}
        onSale={() => dispatch(productsOnSale())}
        newCollection={() => dispatch(newCollection())}
        getProducts={() => window.location.reload(false)}
      />
      <Products products={filteredProducts} total={total} />
    </>
  );
};

export default Home;

