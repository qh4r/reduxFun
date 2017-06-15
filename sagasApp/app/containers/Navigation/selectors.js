import { createSelector } from 'reselect';

/**
 * Direct selector to the navigation state domain
 */
const selectNavigationDomain = () => state => state.get('navigation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Navigation
 */

export const selectNavigation = () => createSelector(
  selectNavigationDomain(),
  (substate) => {
    return substate.toJS();
  }
);

export default selectNavigation;
export {
  selectNavigationDomain,
};
