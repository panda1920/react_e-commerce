import { createSelector } from 'reselect';

function selectShop(state) {
  return state.shop;
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections ? Object.values(shop.collections) : []
)

export function selectCollection(collectionName) {
  console.log(`#########${collectionName}#################`)
  return createSelector(
    [selectShop],
    shop => (shop.collections ? shop.collections[collectionName] : null)
  );
}