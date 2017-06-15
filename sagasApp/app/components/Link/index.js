/**
 *
 * Link
 *
 */

import React from 'react';


import styles from './styles.css';

function Link({ link }) {
  return (
    <div className={styles.link}>
      <div className={styles.voteContainer}>
        <div className={styles.voteCount}>
          <span className={styles.trailingHash}>
            {link.voteCount}
          </span>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div>
          <a
            href={link.url}
            className={styles.linkAnchor}
          > {link.url} </a>
        </div>
        { /* tutaj trailing hash nic nie zmieni - nested style dzialaja! */ }
        <div className={styles.description}>
          <span className={styles.trailingHash}>
            {link.description}
          </span>
        </div>
      </div>
    </div>
  );
}

Link.propTypes = {
  link: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    voteCount: React.PropTypes.number.isRequired,
  }),
};

export default Link;
