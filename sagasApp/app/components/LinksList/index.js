/**
*
* LinksList
*
*/

import React from 'react';


import styles from './styles.css';

function LinksList({ links }) {
  return (
    <div className={styles.linksList}>
      {links.map((link) => <div key={link.id}>
        {link.url} -> {link.description}
      </div>)}
    </div>
  );
}

LinksList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default LinksList;