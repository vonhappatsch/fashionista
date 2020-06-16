import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/actions';
import { addQuantity } from '../../actions/actions';
import { subtractQuantity } from '../../actions/actions';

import './style.css';
import Button from '../Button';
import Quantity from '../Quantity';

const ProductsInCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart.cart);
  
  const handleCheckOut = () => {
    alert("Coming soon!");
  }

  return (
    <section className="purchased">
      {
        Object.keys(cart).map(key =>
          <article className="purchased__item">
            <img className="purchased__item__image" src={cart[key].product.image} alt="foto do produto" />
            <div className="purchased__item__info">
              <h3 className="purchased__item__info__name">{cart[key].product.name}</h3>
              {
                cart[key].product.on_sale 
                ? <p className="purchased__item__info__price">{cart[key].product.actual_price}</p> 
                : <p className="purchased__item__info__price">{cart[key].product.regular_price}</p>
              }
              <p className="purchased__item__info__size">{cart[key].product.chosenSize}</p>
              <Quantity 
                quantity={cart[key].quantity}
                addQuantity={() => dispatch(addQuantity(cart[key].product.id))}
                subtractQuantity={() => dispatch(subtractQuantity(cart[key].product.id))}
              />
            </div>
            <div>
              <Button className="purchased__remove"
                onClick={() => dispatch(removeFromCart(cart[key].product))}
              >
                x
              </Button>
            </div>
          </article>
        )
      }

      <hr className="purchased__line" />


      <h3 className="purchased__checkout">
        <Button className="purchased__checkout__button"
          onClick={() => handleCheckOut()}
        >
          Checkout to know more!
        </Button>
      </h3>
    </section>
  );
};

export default ProductsInCart;