import { User } from 'firebase/auth';
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { UserAction } from './firebase';
import { ProductItem } from './Product';
import { BasketOperation, initialState } from './reducer';

export interface AppState {
  basket: ProductItem[];
  user: User | undefined;
}

export interface BasketAction {
  type: BasketOperation;
  item?: ProductItem;
}

interface AppContext {
  state: AppState;
  dispatch: Dispatch<BasketAction | UserAction>;
}

export const StateContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => null,
});

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer: (state: AppState, action: BasketAction | UserAction) => AppState;
  initialState: AppState;
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
