import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/actions';

import { productsOnSale } from '../../actions/actions';

import { search } from '../../actions/actions';

import './style.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Produtcs/Products';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector(store => store.catalog.products);
  const total = products.length;



  return (
    <>
      <Header />
      <Navbar 
         onChange={e => dispatch(search(e))}
        onSale={() => dispatch(productsOnSale())}
      />

      <Products products={products} total={total} />
    </>
  );
};

export default Home;