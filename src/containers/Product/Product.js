import React from 'react';
import { useLocation } from 'react-router';

import './style.css';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Product = () => {
  let location = useLocation();
  return (
    <>
      <Header />
      <section className="product-detail">
        <img src={location.state.image} alt="Foto do produto" className="product-detail__image" />
        <div className="product-detail__info">
          <h3 className="product-detail__info__name">{location.state.name}</h3>
          <span className="product-detail__info__price">
            {
              location.state.on_sale
                ? <p className="product-detail__info__price__value">
                  {location.state.actual_price}
                </p>
                : <p className="product-detail__info__price__value">
                  {location.state.regular_price}
                </p>
            }
            <p className="product-detail__info__price__value">ou</p>
            <p className="product-detail__info__price__installments">
              {location.state.installments}
            </p>
          </span>
          <div className="product-detail__info__buttons">
            {
              location.state.sizes.map(item =>
                item.available ?
                <Button key={item.sku}
                  className="product-detail__info__buttons__item"
                  onClick={() => console.log(item.size)}
                >
                  {item.size}
                </Button>
                : null
              )
            }
          </div>
          <p className="product-detail__info__warning">
            Selecione um tamanho
          </p>
          <Button className="product-detail__info__buttons__item"
            onClick={() => console.log(location)}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </section>
    </>
  );
};

export default Product;