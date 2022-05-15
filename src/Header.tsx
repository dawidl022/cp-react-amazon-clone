import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBasket } from '@mui/icons-material';
import './Header.scss';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header: FC = () => {
  const {
    state: { basket, user },
  } = useStateValue();

  const signOut = (e: React.MouseEvent) => {
    if (user) {
      e.preventDefault();
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon"></Search>
      </div>

      <div className="header__nav">
        <Link
          to={!user ? '/login' : ''}
          className="header__link"
          onClick={signOut}
        >
          <div className="header__option">
            <span>Hello, {user && user.email}</span>
            <span>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Returns</span>
            <span>&amp; Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
