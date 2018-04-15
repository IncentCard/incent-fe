export const emailValidator = value =>
  value && !/^\S+@\S+\.\S+$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const minLengthValidator = min => value =>
  value && value.length < min
    ? `Must be ${min} characters or more`
    : undefined
