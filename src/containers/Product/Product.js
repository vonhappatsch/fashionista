import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { addToCart } from '../../actions/actions';
import { addToWishlist } from '../../actions/actions';

import './style.css';
import Button from '../../components/Button';

const Product = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [ chosenSize, setChosenSize ] = useState(null);

  const product = {
    id: location.state.id,
    name: location.state.name,
    image: location.state.image,
    on_sale: location.state.on_sale,
    actual_price: location.state.actual_price,
    regular_price: location.state.regular_price,
    installments: location.state.installments,
    sizes: location.state.sizes,
    chosenSize: chosenSize
  }

  const handleClick = () => {
    history.push("/");
  }

  return (
    <>
      <section className="product-detail">
        <img src={product.image} alt="Foto do produto" className="product-detail__image" />
        <div className="product-detail__info">
          <h3 className="product-detail__info__name">{product.name}</h3>
          <span className="product-detail__info__price">
            {
              product.on_sale
                ? <p className="product-detail__info__price__value">
                  {product.actual_price}
                </p>
                : <p className="product-detail__info__price__value">
                  {product.regular_price}
                </p>
            }
            <p className="product-detail__info__price__value">ou</p>
            <p className="product-detail__info__price__installments">
              {product.installments}
            </p>
          </span>
          <div className="product-detail__info__buttons">
            {
              product.sizes.map(item =>
                item.available ?
                <Button key={item.sku}
                  className="product-detail__info__buttons__item"
                  onClick={() => setChosenSize(item.size)}
                >
                  {item.size}
                </Button>
                : null
              )
            }
          </div>
          <p className="product-detail__info__warning">
            Selecione um tamanho antes de colocar no carrinho
          </p>
          <div className="product-detail__info__buttons--interaction">
            <Button disableButton={!chosenSize}
              className="product-detail__info__buttons__item"
              onClick={() => dispatch(addToCart(product, chosenSize))}
            >
              Adicionar ao carrinho
            </Button>
            <FavoriteBorderOutlinedIcon className="product-detail__info__like" 
              onClick={() => dispatch(addToWishlist(product))}
            />
          </div>
        </div>
      </section>
      <ArrowBackIosIcon className="back-button" 
        onClick={() => handleClick()}
      />
    </>
  );
};

export default Product;