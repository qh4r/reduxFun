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

  static propTypes = {
    cancelAdd: React.PropTypes.func.isRequired,
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      urlError: '',
      descriptionError: '',
    };
  }

  addLink = () => {
    this.props.addLink({
      description: this.descriptionInput.value,
      url: this.urlInput.value,
      topicName: this.props.topicName,
    });
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
            errorText={this.state.urlError}
            placeholder="URL"
            ref={(urlInput) => {
              this.urlInput = urlInput;
            }}
            onChange={() => this.setState(() => ({ urlError: '' }))}
          />
          <TextInput
            className={styles.input}
            errorText={this.state.descriptionError}
            placeholder="Description"
            ref={(descriptionInput) => {
              this.descriptionInput = descriptionInput;
            }}
            onChange={() => this.setState(() => ({ descriptionError: '' }))}
          />

          <div className={classNames(styles.actionContainer)}>
            <div className={styles.button} onClick={() => this.props.cancelAdd()}>
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.addLink}
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
