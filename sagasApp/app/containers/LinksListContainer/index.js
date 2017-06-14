/*
 *
 * LinksListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinksListContainer from './selectors';
import LinksList from '../../components/LinksList/index';

export class LinksListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LinksList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLinksListContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksListContainer);
