/*
 *
 * LinksListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinksListContainer from './selectors';
import LinksList from '../../components/LinksList/index';
import { requestLinks, goToAddLink } from './actions';

export class LinksListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    requestLinks: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    goToAddLink: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicName !== this.props.topicName) {
      this.props.requestLinks(newProps.topicName);
    }
  }

  render() {
    return (
      <div>
        <LinksList {...this.props} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: () => dispatch(requestLinks),
  };
};

const mapStateToProps = selectLinksListContainer();

export default connect(mapStateToProps, { requestLinks, goToAddLink })(LinksListContainer);
