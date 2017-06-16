/**
 *
 * LinksList
 *
 */

import React from 'react';


import styles from './styles.css';
import Link from '../Link';
import IconButton from '../IconButton/index';

function LinksList({ links, topicName, children, goToAddLink }) {
  return (
    <div className={styles.linksList}>
      <h2>Location: {topicName}</h2>
      {links.map((link) =>
        <Link key={link.id} link={link} />,
      )}
      <IconButton
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
        onClick={() => goToAddLink(topicName)}
      />

      {children}
    </div>
  );
}

LinksList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
  goToAddLink: React.PropTypes.func.isRequired,
  topicName: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
};

export default LinksList;
