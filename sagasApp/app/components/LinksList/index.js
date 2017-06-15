/**
 *
 * LinksList
 *
 */

import React from 'react';


import styles from './styles.css';
import Link from '../Link';

function LinksList({ links, topicName }) {
  return (
    <div className={styles.linksList}>
      <h2>Location: {topicName}</h2>
      {links.map((link) =>
        <Link key={link.id} link={link} />,
      )}
    </div>
  );
}

LinksList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
  topicName: React.PropTypes.string.isRequired,
};

export default LinksList;
