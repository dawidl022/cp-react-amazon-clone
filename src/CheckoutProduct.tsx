import React, { FC } from 'react';
import { ProductItem } from './Product';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.scss';
import { BasketOperation } from './reducer';

const CheckoutProduct: FC<ProductItem> = (item: ProductItem) => {
  const { image, title, price, rating } = item;
  const { dispatch } = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: BasketOperation.REMOVE_FROM_BASKET, item });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(null)
            .map(() => (
              <span>⭐️</span>
            ))}
        </div>

        <button type="button" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
