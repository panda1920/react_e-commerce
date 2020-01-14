import CartActionTypes from './cart.types';

export function toggleCartHidden() {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
}
export function addItem(item) {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
}
export function removeItem(item) {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  };
}
export function clearItemFromCart(item) {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  };
}

export function clearCart() {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
}