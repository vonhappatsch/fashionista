import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';
import Button from '../Button';

const EmptyCart = () => {
  let history = useHistory();
  
  const handleClick = () => {
    history.push("/");
  }

  return(
    <article className="empty-cart">
      <h3 className="empty-cart__message">Seu carrinho está<br />vazio :(</h3>
      <Button
        className="empty-cart__purchase"
        onClick={() => handleClick()}
      >
        Que tal adicionar algo? :D
      </Button>
    </article>
  );
};

export default EmptyCart;