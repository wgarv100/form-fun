import { Box, TextField, Typography } from "@mui/material";
import {
  validateEmail,
  validatePasswordsMatch,
} from "../validation/validateSignupInfo";
import "../App.css";

const SignupInfo = ({
  formData,
  setFormData,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
}) => {
  // Clears email error message after condition is met by changing the form field
  const handleEmailBlur = () => {
    if (validateEmail(formData.email)) {
      setEmailError("");
    }
  };

  // Clears password error message after condition is met by changing the form field
  const handlePasswordBlur = () => {
    if (validatePasswordsMatch(formData.password, formData.confirmPassword)) {
      setPasswordError("");
    }
  };

  return (
    <Box className="signup-info" sx={{ pt: 5, pb: 2 }}>
      <Typography>Signup Info</Typography>
      <TextField
        placeholder="Email"
        variant="standard"
        type="email"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        error={!!emailError}
        helperText={emailError}
        onBlur={handleEmailBlur}
      />
      <TextField
        placeholder="Password"
        variant="standard"
        type="password"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        error={!!passwordError}
        helperText={passwordError}
        onBlur={handlePasswordBlur}
      />
      <TextField
        placeholder="Confirm Password"
        variant="standard"
        type="password"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </Box>
  );
};

export default SignupInfo;
