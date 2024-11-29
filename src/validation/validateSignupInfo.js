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

export const validateStep0 = (formData, setEmailError, setPasswordError) => {
  let isValid = true;

  if (!validateEmail(formData.email)) {
    setEmailError("Please enter a valid email address.");
    isValid = false;
  } else {
    setEmailError("");
  }

  if (!validatePasswordNotEmpty(formData.password)) {
    setPasswordError("Please enter a password.");
    isValid = false;
  } else if (
    !validatePasswordsMatch(formData.password, formData.confirmPassword)
  ) {
    setPasswordError("Passwords do not match.");
    isValid = false;
  } else if (!validateStrongPassword(formData.password)) {
    setPasswordError("Password is not strong enough.");
    isValid = false;
  } else {
    setPasswordError("");
  }

  return isValid;
};
