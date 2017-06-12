import { createSelector } from 'reselect';

/**
 * Direct selector to the navigation state domain
 */
const selectNavigationDomain = () => state => {console.log('state',state); return state.get('navigation')};

/**
 * Other specific selectors
 */


/**
 * Default selector used by Navigation
 */

const selectNavigation = () => createSelector(
  selectNavigationDomain(),
  (substate) => {
    return substate.toJS();
  }
);

export default selectNavigation;
export {
  selectNavigationDomain,
};
