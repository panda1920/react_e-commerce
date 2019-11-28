import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

function CheckoutPage({ cartItems, totalPrice }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(
          item => <CheckoutItem key={item.id} item={item} />
        )
      }
      <div className='total'>
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartTotal(state),
  };
}

export default connect(mapStateToProps)(CheckoutPage);