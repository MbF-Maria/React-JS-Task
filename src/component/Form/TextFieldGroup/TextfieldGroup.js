import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

class TextFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldNotEmpty: false,
    };
    this.keyUpEvent = this.keyUpEvent.bind(this);
  }
  keyUpEvent(e) {
    if (e.target.value !== '') {
      this.setState({
        fieldNotEmpty: true,
      });
    } else {
      this.setState({
        fieldNotEmpty: false,
      });
    }
  }
  render() {
    const { id, field, value, label, error, type, onChange, maxLength, checkUserExists, name } = this.props;
    const className = cx({
      formGroup: true,
      hasError:
        (error && value === '') ||
        (type === 'email' && error) ||
        (type === 'password' && error),
      hasSuccess: this.state.fieldNotEmpty || value !== '',
    });
    return (
      <div className={className}>
        <input
          onChange={onChange}
          onKeyUp={this.keyUpEvent}
          onBlur={checkUserExists}
          value={value}
          type={type}
          name={field}
          maxLength={maxLength}
          className={styles.formGroupInput}
          id={id}
        />
        <label className={styles.formGroupLabel} htmlFor={id}>
          {label}
        </label>
        {(error && value === '') ||
        (type === 'email' && error) ||
        (type === 'password' && error) ||
        (name === 'companynumber' && error) ? (
          <span className={styles.helpBlock}>{error}</span>
        ) : (
          ''
        )}
      </div>
    );
  }
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;