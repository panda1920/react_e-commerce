import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

function CartIcon(props) {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={() => props.toggleCartHidden() }/>
      <span className='item-count'>0</span>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartHidden: () => { dispatch(toggleCartHidden()) }
  }
}

export default connect(null, mapDispatchToProps)(CartIcon);