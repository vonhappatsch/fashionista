// tem que ver a relação desse com o productcard na hora dos maps no fetch da api

import React from 'react';

import './style.css';
import ProductCard from '../ProductCard/ProductCard';

const Products = (props) => {
  return (
    <div className="products">
      <p className="products__amount">
        {`${props.total} produtos encontrados`}
      </p>
      <section className="products__wrapper">
        {
          props.products ? props.products.map((product, i) => <ProductCard key={i} data={product} />) : null
        }
      </section>
    </div>
  );
};

export default Products;