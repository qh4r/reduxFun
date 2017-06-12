/**
*
* NavigationComponent
*
*/

import React from 'react';


import styles from './styles.css';

function NavigationComponent({topics}) {
  return (
    <div className={styles.navigationComponent}>
      {topics.map(({name}) => <p>{name}</p>)}
    </div>
  );
}

NavigationComponent.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      desc: React.PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavigationComponent;
