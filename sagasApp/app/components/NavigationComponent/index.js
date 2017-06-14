/**
 *
 * NavigationComponent
 *
 */

import React from 'react';
import styles from './styles.css';
import AppBar from '../AppBar/index';
import Menu from '../Menu/index';

function NavigationComponent({ topics, pickTopic, toggleMenu, isMenuOpen }) {
  return (
    <div className={styles.navigationComponent}>
      <AppBar toggleMenu={toggleMenu} />
      <Menu
        items={topics}
        pickItem={pickTopic}
        itemLabelAttr={"name"}
        itemKeyAttr={"name"}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

NavigationComponent.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    }),
  ).isRequired,
  pickTopic: React.PropTypes.func.isRequired,
  toggleMenu: React.PropTypes.func.isRequired,
  isMenuOpen: React.PropTypes.bool.isRequired,
};

export default NavigationComponent;
