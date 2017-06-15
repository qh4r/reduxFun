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

const selectRouteTopic = () =>
  (state, props) =>
    props.params.topicName;

const selectLinksListContainer = () => createSelector(
  selectLinksListContainerDomain(),
  selectRouteTopic(),
  (substate, topicName) => ({ ...substate.toJS(), topicName }),
);

export default selectLinksListContainer;
export {
  selectLinksListContainerDomain,
};
