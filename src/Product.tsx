import React, { FC } from 'react';
import './Product.scss';
import { BasketOperation } from './reducer';
import { useStateValue } from './StateProvider';

type Rating = 1 | 2 | 3 | 4 | 5;

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: Rating;
}

const Product: FC<ProductItem> = (item: ProductItem) => {
  const { dispatch } = useStateValue();
  const { title, image, price, rating } = item;

  const addToBasket = () => {
    dispatch({ type: BasketOperation.ADD_TO_BASKET, item });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(null)
            .map(() => (
              <span>⭐️</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button type="button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
