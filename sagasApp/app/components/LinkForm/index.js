/**
 *
 * LinkForm
 *
 */

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

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
          <input
            type="text"
            className={classNames(styles.input, { [styles.urlError]: this.state.urlError })}
            placeholder="URL"
            ref={(emailInput) => {
              this.emailInput = emailInput;
            }}
            onChange={() => this.setState({
              urlError: '',
            })}
          />
          {this.state.urlError && <div className={styles.errorMsg}>
            {this.state.urlError}
          </div>}
          <input
            type="text"
            className={classNames(styles.input, { [styles.descriptionError]: this.state.descriptionError })}
            placeholder="Description"
            ref={(urlInput) => {
              this.urlInput = urlInput;
            }}
            onChange={() => this.setState({
              descriptionError: '',
            })}
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
