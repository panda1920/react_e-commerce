import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

function CartIcon({ itemCount, toggleCartHidden }) {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={() => toggleCartHidden() }/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    itemCount: selectCartItemsCount(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartHidden: () => { dispatch(toggleCartHidden()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);