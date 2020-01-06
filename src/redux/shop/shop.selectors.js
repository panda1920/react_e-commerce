import { createSelector } from 'reselect';

function selectShop(state) {
  return state.shop;
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections ? Object.values(shop.collections) : []
)

export function selectCollection(collectionName) {
  return createSelector(
    [selectShop],
    shop => (shop.collections ? shop.collections[collectionName] : null)
  );
}

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);