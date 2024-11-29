import { Box, TextField } from "@mui/material";
import {
  validateEmail,
  validatePasswordsMatch,
} from "../validation/validateSignupInfo";
import "../App.css";

const SignupInfo = ({
  formData,
  setFormData,
  setEmailError,
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
      <TextField
        placeholder="Email"
        variant="standard"
        type="email"
        sx={{ pt: 3, pb: 3, width: "100%" }}
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        onBlur={handleEmailBlur}
      />
      <TextField
        placeholder="Password"
        variant="standard"
        type="password"
        sx={{ pt: 3, pb: 3, width: "100%" }}
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        onBlur={handlePasswordBlur}
      />
      <TextField
        placeholder="Confirm Password"
        variant="standard"
        type="password"
        sx={{ pt: 3, pb: 3, width: "100%" }}
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </Box>
  );
};

export default SignupInfo;
