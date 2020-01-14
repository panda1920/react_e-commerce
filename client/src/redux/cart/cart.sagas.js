import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* cartRootSaga() {
  yield all([
    call(onSignoutSuccess),
  ]);
}

export function* onSignoutSuccess() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartItems);
}

export function* clearCartItems() {
  yield put( clearCart() );
}