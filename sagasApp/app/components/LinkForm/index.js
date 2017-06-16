/**
 *
 * LinkForm
 *
 */

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import TextInput from '../TextInput/index';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      urlError: '',
    };
  }

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.header}>
            Add new Link if you wish
          </div>
          <TextInput
            className={styles.input}
            errorText="test"
            placeholder="URL"
            ref={(emailInput) => {
              this.urlInput = emailInput;
            }}
          />
          <TextInput
            className={styles.input}
            errorText=""
            placeholder="Description"
            ref={(emailInput) => {
              this.descriptionInput = emailInput;
            }}
          />

          <div className={classNames(styles.actionContainer)}>
            <div className={styles.button} onClick={() => this.props.cancelLogin()}>
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.loginClicked}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
