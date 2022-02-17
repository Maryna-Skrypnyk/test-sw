import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  handleClick,
  contentBtn,
  disabled,
  type,
  button,
  children,
}) => (
  <button
    disabled={disabled}
    onClick={handleClick}
    className={styles[`${button}`]}
    type={type}
  >
    {contentBtn}
    {children}
  </button>
);

Button.defaultProps = {
  handleClick: () => null,
  disabled: false,
  type: 'button',
  contentBtn: '',
  button: 'Button',
  children: null,
};

Button.propTypes = {
  handleClick: PropTypes.func,
  contentBtn: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  button: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
