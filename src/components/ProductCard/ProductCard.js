import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const ProductCard = (props) => {
  const { data } = props;

  return (
    <Link to={{
      pathname: `/product/` + data.name,
      state: {
        name: data.name, 
        image: data.image, 
        on_sale: data.on_sale,
        sizes: data.sizes,
        regular_price: data.regular_price,
        actual_price: data.actual_price,
        installments: data.installments,
        discount_percentage: data.discount_percentage
      }}} className="product__card"
    >
      {
        data.image
          ? <img src={data.image} alt="Foto do produto" 
              className="product__card__image" 
            />
          : <img src="https://placekitten.com/533/664" 
              alt="Foto não disponível" 
              className="product__card__image" 
            />
      }
      <h3 className="product__card__name">{data.name}</h3>
      {
        data.on_sale
          ? <span className="product__card__discountprice">
              <p className="product__card__discountprice-reg">{data.regular_price}</p> 
              <p className="product__card__discountprice-actual">{data.actual_price}</p>
            </span>
          : <p className="product__card__regprice">{data.regular_price}</p>
      }
    </Link>
  );
}

export default ProductCard;