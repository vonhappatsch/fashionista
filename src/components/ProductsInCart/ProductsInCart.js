import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/actions';

import './style.css';
import Button from '../Button';
import Quantity from '../Quantity';

const ProductsInCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart.cart);

  useEffect(() => {
    console.log(cart)
  })

  // tem que corrigir que ta indo duplicado e eu esuqeci de proibir ir sem tamanho AAAKKKK
  // fazer a ação pro total

  return (
    <section className="purchased">

      {
        cart.map(item =>
          <article className="purchased__item">
            <img className="purchased__item__image" src={item.product.image} />
            <div className="purchased__item__info">
              <h3 className="purchased__item__info__name">{item.product.name}</h3>
              {
                item.product.on_sale ? <p className="purchased__item__info__price">{item.product.actual_price}</p> : <p className="purchased__item__info__price">{item.product.regular_price}</p>
              }
              <p className="purchased__item__info__size">{item.product.chosenSize}</p>
              <Quantity />
            </div>
            <div>
              <Button className="purchased__remove"
                onClick={() => dispatch(removeFromCart(item.product))}
              >
                x
              </Button>
            </div>
          </article>
        )
      }

      <hr className="purchased__line" />


      <h3 className="purchased__total">
        Total: xx
        </h3>
    </section>
  );
};

export default ProductsInCart;