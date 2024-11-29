import validator from "validator";

export const validateEmail = (email) => {
  return validator.isEmail(email);
};

export const validatePasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const validatePasswordNotEmpty = (password) => {
  return password.trim().length > 0;
};

export const validateStrongPassword = (password) => {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });
};
