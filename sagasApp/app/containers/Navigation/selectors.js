import { createSelector } from 'reselect';
import { selectLoginContainer } from '../LoginContainer/selectors';

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

export const selectRouteTopic = () => (state, props) => props.params.topicName;

export const selectNavigation = () => createSelector(
  selectNavigationDomain(),
  selectLoginContainer(),
  (substate, loginState) =>
    ({ ...substate.toJS(), email: loginState.email }),
);

export default selectNavigation;
export {
  selectNavigationDomain,
};
