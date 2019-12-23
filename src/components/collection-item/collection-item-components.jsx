import React from 'react'
import { connect } from 'react-redux';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({item, addItem}) {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image' 
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton className='custom-button' onClick={() => addItem(item)} isInverted>Add to Cart</CustomButton>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => { dispatch(addItem(item)); }
  };
}

export default connect(null, mapDispatchToProps)(CollectionItem);