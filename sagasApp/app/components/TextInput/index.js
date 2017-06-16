/**
 *
 * TextInput
 *
 */

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)
    this.state = {
      errorText: '',
    };
  }

  get value() {
    return this.field.value;
  }

  render() {
    const { errorText } = this.props;
    const fieldError = errorText ? (
      <div className={styles.errorMsg}>
        {errorText}
      </div>
    ) : null;

    return (
      <div className={styles.textInput}>
        <input
          type="text"
          className={classNames(styles.input, { [styles.errorMark]: errorText }, this.props.className)}
          placeholder={this.props.placeholder}
          ref={(field) => {
            this.field = field;
          }}
          onChange={this.props.onChange}
        />

        {fieldError}
      </div>
    );
  }
}

TextInput.propTypes = {
  errorText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.any,
  onChange: React.PropTypes.func,
}

export default TextInput;
