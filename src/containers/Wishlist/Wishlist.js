import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './style.css';

const Wishlist = () => {
  const wishlist = useSelector(store => store.wishlist.wishlist);
  const history = useHistory();

  useEffect(() => {
    console.log(wishlist)
  })

  const handleClick = () => {
    history.push("/");
  }

  // tem que corrigir que ta indo duplicado e eu esuqeci de proibir ir sem tamanho AAAKKKK
  // fazer a ação pro total

  return (
    <section className="wishlist">
      {
        wishlist.map(item =>
          <article className="wishlist__item">
            <img className="wishlist__item__image" src={item.product.image} />
            <div className="wishlist__item__info">
              <h3 className="wishlist__item__info__name">{item.product.name}</h3>
              {
                item.product.on_sale 
                ? <p className="wishlist__item__info__price">{item.product.actual_price}</p> 
                : <p className="wishlist__item__info__price">{item.product.regular_price}</p>
              }
              <p className="wishlist__item__info__size">{item.product.installments}</p>
            </div>
          </article>
        )
      }
      <ArrowBackIosIcon className="wishlist__back-button"
        onClick={() => handleClick()}
      />
    </section>
  );
};

export default Wishlist;