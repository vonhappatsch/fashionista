import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.css';
import EmptyCart from '../../components/EmptyCart';
import ProductsInCart from '../../components/ProductsInCart';

const Cart = () => {
  let history = useHistory();

  const cart = useSelector(story => story.cart.cart);
  
  const handleClick = () => {
    history.push("/");
  }

    return(
    <>
      <section className="cart">
        {
          cart.length === 0
          ? <EmptyCart />
          : <ProductsInCart />
        }
      </section>
      <ArrowBackIosIcon className="back-button" 
        onClick={() => handleClick()}
      />
    </>
    )
};

export default Cart;