/**
 *
 * NavigationComponent
 *
 */

import React from 'react';


import styles from './styles.css';

function NavigationComponent({ topics, pickTopic }) {
  return (
    <div className={styles.navigationComponent}>
      {topics.map((topic, i) =>
        <div key={i} onClick={() => pickTopic(topic)}>
          {topic.name}
        </div>)}
    </div>
  );
}

NavigationComponent.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  pickTopic: React.PropTypes.func.isRequired,
};

export default NavigationComponent;
