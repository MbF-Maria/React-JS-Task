import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const ButtonPrimary = ({ label }) => (
  <button className="btn">
    {label}
  </button>
);

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ButtonPrimary;