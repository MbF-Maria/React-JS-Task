import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

import { EMAIL_ADDRESS,ADDRESSINVALID_EMAIL,PASSWORD_INVALID,PASSWORD_INVALIDLENGTH,PASSWORD_TOLONG } from './customMessage';

// Signin validation
export function validateInput(data) {
  const errors = {};
  if (Validator.isEmpty(data.email)) {
    errors.email = EMAIL_ADDRESS;
  }

  if (!Validator.isEmail(data.email) && !Validator.isEmpty(data.email)) {
    errors.email = ADDRESSINVALID_EMAIL;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = PASSWORD_INVALID;
  }

  if (!Validator.isLength(data.password, { min: 8 }) && !Validator.isEmpty(data.password)) {
    errors.password = PASSWORD_INVALIDLENGTH;
  }

  if (!Validator.isLength(data.password, { max: 15 }) && !Validator.isEmpty(data.password)) {
    errors.password = PASSWORD_TOLONG;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}