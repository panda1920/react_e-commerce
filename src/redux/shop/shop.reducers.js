import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
}

function shopReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default shopReducer;