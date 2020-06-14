import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';
import Button from '../Button';

const Quantity = () => {
  const amount = useSelector(store => store.cart.quantity);

  return (
    <div className="quantity">
      <Button className="quantity__button">-</Button>
      <p className="quantity__amount">
        {amount}
      </p>
      <Button className="quantity__button--plus">+</Button>
    </div>
  );
};

export default Quantity;