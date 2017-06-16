import { createSelector } from 'reselect';
import { selectRouteTopic } from '../Navigation/selectors';

/**
 * Direct selector to the linkFormContainer state domain
 */
const selectLinkFormContainerDomain = () => state => state.get('linkFormContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkFormContainer
 */

const selectLinkFormContainer = () => createSelector(
  selectLinkFormContainerDomain(),
  selectRouteTopic(),
  (substate, activeTopic) => ({ ...substate.toJS(), topicName: activeTopic }),
);

export default selectLinkFormContainer;
export {
  selectLinkFormContainerDomain,
};
