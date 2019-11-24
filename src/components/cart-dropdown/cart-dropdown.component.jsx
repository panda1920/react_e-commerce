import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

function Cart({cartItems}) {
  console.log(cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: selectCartItems(state)
  };
}

export default connect(mapStateToProps)(Cart);