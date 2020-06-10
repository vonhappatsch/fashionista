import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/actions';

import { productsOnSale } from '../../actions/actions';

import { search } from '../../actions/actions';

import { newCollection } from '../../actions/actions';

import './style.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Produtcs/Products';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredProducts = useSelector(store => store.catalog.filteredProducts);
  const total = filteredProducts.length;



  return (
    <>
      <Header />
      <Navbar 
        onChange={e => dispatch(search(e))}
        onSale={() => dispatch(productsOnSale())}
        newCollection={() => dispatch(newCollection())}
      />

      <Products products={filteredProducts} total={total} />
    </>
  );
};

export default Home;