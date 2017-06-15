/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navigation from '../Navigation/index';
import LinksListContainer from '../LinksListContainer/index';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <div>
        <Navigation />
        {/* <LinksListContainer /> */}
        {this.props.children}
      </div>
    );
  }
}
