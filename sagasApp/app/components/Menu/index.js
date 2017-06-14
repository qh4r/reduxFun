/**
 *
 * Menu
 *
 */

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

function Menu({ items, pickItem, itemLabelAttr, itemKeyAttr, isMenuOpen, toggleMenu }) {
  const itemNodes = items.map(item =>
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => {
        pickItem(item);
      }}
    >
      {item[itemLabelAttr]}
    </div>,
  );
  return (
    <div
      onMouseLeave={() => isMenuOpen && toggleMenu()}
      className={classNames(styles.menu, { [styles.menuOpen]: isMenuOpen })}
    >
      {itemNodes}
    </div>
  );
}

Menu.propTypes = {
  items: React.PropTypes.array.isRequired,
  pickItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isMenuOpen: React.PropTypes.bool.isRequired,
  toggleMenu: React.PropTypes.func.isRequired,
};

export default Menu;
