import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseutils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHidden } from '../../redux/cart/cart.selectors';

function Header({ currentUser, hidden }) {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          ) : (
            <Link className='option' to='/signin'>SIGN IN</Link>
          )
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state),
  };
}

export default connect(mapStateToProps)(Header);