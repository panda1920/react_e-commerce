import ShopActionTypes from './shop.types';

export function updateCollections(collectionsMap) {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
}