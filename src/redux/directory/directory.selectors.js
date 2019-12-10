import { createSelector } from 'reselect';

function selectDirectory(state) {
  return state.directory;
}

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);