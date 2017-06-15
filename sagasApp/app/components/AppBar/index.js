/**
 *
 * AppBar
 *
 */

import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import styles from './styles.css';

function AppBar({ toggleMenu, email }) {
  return (
    <div className={styles.appBar}>
      <div
        className={styles.iconButton}
        onClick={() => toggleMenu()}
      >
        <FontAwesome
          className={styles.icon}
          name="bars"
        />
      </div>
      <div className={styles.heading}>
        Testy Testy
      </div>
      <div className={styles.linkContainer}>
        { email || <Link className={styles.link} to="/login">log in</Link>}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
}

AppBar.defaultProps = {
  email: '',
}

export default AppBar;
