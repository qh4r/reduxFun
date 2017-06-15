import { createSelector } from 'reselect';
import { selectNavigation } from '../Navigation/selectors';
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

export const selectTopic = () => createSelector(
  selectNavigation(),
  selectRouteTopic(),
  (navigationState, topicName) => {
    const selectedTopic = navigationState.topics.find(x => x.name === topicName);
    return selectedTopic || { name: '' };
  },
);

const selectLinksListContainer = () => createSelector(
  selectLinksListContainerDomain(),
  selectTopic(),
  (substate, { name }) => ({ ...substate.toJS(), topicName: name }),
);

export default selectLinksListContainer;
export {
  selectLinksListContainerDomain,
};
