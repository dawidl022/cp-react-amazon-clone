import { User } from 'firebase/auth';
import { UserAction } from './firebase';
import { ProductItem } from './Product';
import { AppState, BasketAction } from './StateProvider';

export const initialState = { basket: [], user: undefined };

export enum BasketOperation {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  NOOP,
}

export enum UserOperation {
  SET_USER,
  NOOP,
}

export const getBasketTotal = (basket: ProductItem[]) =>
  basket.reduce((sum, item) => sum + item.price, 0);

const baskerReducer = (basket: ProductItem[], action: BasketAction) => {
  if (action.item == null) {
    return basket;
  }

  switch (action.type) {
    case BasketOperation.ADD_TO_BASKET:
      return [...basket, action.item];

    case BasketOperation.REMOVE_FROM_BASKET:
      const newBasket = [...basket];
      newBasket.splice(
        basket.findIndex(x => x.id === action.item?.id),
        1
      );
      return newBasket;

    default:
      return basket;
  }
};

const userReducer = (user: User | undefined, action: UserAction) => {
  switch (action.type) {
    case UserOperation.SET_USER:
      return action.user;

    default:
      return user;
  }
};

const reducer = (
  { basket, user }: AppState,
  action: BasketAction | UserAction
) => ({
  basket: baskerReducer(
    basket,
    action.type in BasketOperation
      ? (action as BasketAction)
      : { type: BasketOperation.NOOP }
  ),
  user: userReducer(
    user,
    action.type in UserOperation
      ? (action as UserAction)
      : { type: UserOperation.NOOP }
  ),
});

export default reducer;
