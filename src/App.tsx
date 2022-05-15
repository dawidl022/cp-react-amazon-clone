import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import { auth } from './firebase';
import Home from './Home';
import Login from './Login';
import { UserOperation } from './reducer';
import { useStateValue } from './StateProvider';

function App() {
  const { dispatch } = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: UserOperation.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: UserOperation.SET_USER,
          user: undefined,
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
