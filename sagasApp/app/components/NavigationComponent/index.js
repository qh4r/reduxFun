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
      {topics.map(({name, description}, i) =>
        <div key={i}>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>)}
    </div>
  );
}

NavigationComponent.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavigationComponent;
