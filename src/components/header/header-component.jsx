import React from 'react';
import { connect } from 'react-redux';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseutils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectHidden } from '../../redux/cart/cart.selectors';

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {
          currentUser ? (
            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          ) : (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
          )
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state),
  };
}

export default connect(mapStateToProps)(Header);