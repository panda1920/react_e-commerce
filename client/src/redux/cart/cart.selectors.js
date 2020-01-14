import { createSelector } from 'reselect';

function selectCart(state) {
  return state.cart;
}

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (acc, item) => acc + item.quantity, 0
  )
);

export const selectHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  )
);