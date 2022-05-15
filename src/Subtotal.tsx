import React, { FC } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.scss';

const Subtotal: FC = () => {
  const {
    state: { basket },
  } = useStateValue();

  return (
    <div className="subtotal">
      <p>
        <span>
          Subtotal ({basket.length} item{basket.length === 1 ? '' : 's'}):{' '}
        </span>
        <strong>
          <CurrencyFormat
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix="£"
          />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" id="gift" />
        <label htmlFor="gift"> This order contains a gift</label>
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
