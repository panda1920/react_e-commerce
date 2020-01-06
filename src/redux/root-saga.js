import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userRootSaga } from './user/user-sagas';
import { cartRootSaga } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userRootSaga),
    call(cartRootSaga),
  ]);
}