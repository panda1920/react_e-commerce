import { createSelector } from 'reselect';

function selectUser(state) {
  return state.user;
}

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);