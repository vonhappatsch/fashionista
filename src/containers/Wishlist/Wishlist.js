import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { removeFromWishlist } from '../../actions/actions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './style.css';
import Button from '../../components/Button';

const Wishlist = () => {
  const wishlist = useSelector(store => store.wishlist.wishlist);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push("/");
  }

  return (
    <section className="wishlist">
      {
        Object.keys(wishlist).length === 0
        ? <h3>Curta algo! <span role="img" aria-label="heart-emoji">💖</span></h3>
        : Object.keys(wishlist).map(key =>
          <article className="wishlist__item">
            <img className="wishlist__item__image" src={wishlist[key].product.image} alt="foto do produto" />
            <div className="wishlist__item__info">
              <h3 className="wishlist__item__info__name">{wishlist[key].product.name}</h3>
              {
                wishlist[key].product.on_sale 
                ? <p className="wishlist__item__info__price">{wishlist[key].product.actual_price}</p> 
                : <p className="wishlist__item__info__price">{wishlist[key].product.regular_price}</p>
              }
              <p className="wishlist__item__info__size">{wishlist[key].product.installments}</p>
            </div>
            <div className="wishlist__item__remove">
              <Button className="wishlist__item__remove__button"
                onClick={() => dispatch(removeFromWishlist(wishlist[key].product))}
              >
                Desapegar
              </Button>  
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