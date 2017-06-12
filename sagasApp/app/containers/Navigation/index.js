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

export class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('navigation props', this.props);
    return (
      <div className={styles.navigation}>
        NAVIGATION
        <NavigationComponent {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectNavigation();

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect((state) => {
  console.log("STATE NAV",state);
  return mapStateToProps(state);
}, mapDispatchToProps)(Navigation);
