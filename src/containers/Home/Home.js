import React, { useState, useEffect } from 'react';

import './style.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Produtcs/Products';

function Home() {
  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ sorted, setSorted ] = useState(false);
  const [ total, setTotal ] = useState(0);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then(res => res.json())
      .then(data => setProducts(data))
      .then(setLoading(false))
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    let amount = filteredProducts.length;
    setTotal(amount);
  }, [filteredProducts]);

  const handleChange = e => {
    let search = products.filter(products => products.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredProducts(search);
  };

  const onSale = () => {
    if (sorted) {
      setFilteredProducts(products);
      setSorted(false);
    } else {
      let sale = products.filter(products => products.on_sale === true);
      setFilteredProducts(sale);
      setSorted(true);
    }
  };

  return (
    <>
      <Header />
      <Navbar 
        onChange={e => handleChange(e)} 
        onSale={() => onSale()}
      />
      {
        (loading)
        ? <p className="loading">Carregando...</p>
        : <Products products={filteredProducts} total={total} />
      }
    </>
  );
};

export default Home;