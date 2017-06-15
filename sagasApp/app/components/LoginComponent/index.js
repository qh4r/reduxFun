/**
 *
 * LoginComponent
 *
 */

import React from 'react';

import styles from './styles.css';
import emailValidator from 'email-validator';
import classNames from 'classnames';

class LoginComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
    };
  }

  loginClicked = () => {
    const email = this.loginInput.value;
    if (!emailValidator.validate(email)) {
      this.setState({
        emailError: 'Please provide a valid email',
      });
    } else {
      this.props.login(email);
    }
  }

  render() {
    return (
      <div className={styles.loginComponent}>
        <div className={styles.header}>
          Use email to login
        </div>
        <input
          type="text"
          className={classNames(styles.input, { [styles.emailError]: this.state.emailError })}
          placeholder="email"
          ref={(loginInput) => {
            this.loginInput = loginInput;
          }}
          onChange={() => this.setState({
            emailError: '',
          })}
        />
        {this.state.emailError && <div className={styles.errorMsg}>
          {this.state.emailError}
        </div>}
        <div className={classNames(styles.actionContainer)}>
          <div className={styles.button} onClick={() => this.props.cancelLogin()}>
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.loginClicked}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
