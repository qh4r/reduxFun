import { createSelector } from 'reselect';

/**
 * Direct selector to the linksListContainer state domain
 */
const selectLinksListContainerDomain = () => state => state.get('linksListContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinksListContainer
 */

const selectLinksListContainer = () => createSelector(
  selectLinksListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectLinksListContainer;
export {
  selectLinksListContainerDomain,
};
