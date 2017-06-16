/**
 *
 * AppBar
 *
 */

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import IconButton from '../IconButton/index';

function AppBar({ toggleMenu, email }) {
  return (
    <div className={styles.appBar}>
      <IconButton
        iconClass={styles.icon}
        buttonClass={styles.iconButton}
        onClick={() => toggleMenu()}
        icon="bars"
      />
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
};

AppBar.defaultProps = {
  email: '',
};

export default AppBar;
