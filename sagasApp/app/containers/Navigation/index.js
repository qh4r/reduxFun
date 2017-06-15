/*
 *
 * Navigation
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigation from './selectors';
import styles from './styles.css';
import NavigationComponent from '../../components/NavigationComponent';
import * as actions from './actions';

export class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
    pickTopic: React.PropTypes.func.isRequired,
    toggleMenu: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <div className={styles.navigation}>
        NAVIGATION
        <NavigationComponent
          {...this.props}
          pickTopic={(topic) => this.props.pickTopic(topic)}
          toggleMenu={() => this.props.toggleMenu()}
        />
      </div>
    );
  }
}

const mapStateToProps = selectNavigation();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(actions.requestTopics),
  };
}

export default connect((state) => {
  return mapStateToProps(state);
}, actions)(Navigation);
