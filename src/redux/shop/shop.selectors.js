import { createSelector } from 'reselect';

function selectShop(state) {
  return state.shop;
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export function selectCollection(collectionName) {
  return createSelector(
    [selectCollections],
    collections => collections[collectionName]
  );
}