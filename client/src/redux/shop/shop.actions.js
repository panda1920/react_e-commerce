import ShopActionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebaseutils';

export function updateCollections(collectionsMap) {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
}

export function fetchCollectionsStart() {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START
  };
}

export function fetchCollectionsSuccess(collections) {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
}

export function fetchCollectionsFailure(errorMessage) {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
}

export function fetchCollectionsStartAsync() {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const colletctionRef = firestore.collection('collection');
    
    colletctionRef.get().then(snapshot => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));
    }).catch(error => {
      dispatch(fetchCollectionsFailure(error.message));
    })
  };
}
