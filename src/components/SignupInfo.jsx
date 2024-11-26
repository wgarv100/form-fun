import { Box, TextField, Typography } from "@mui/material";
import "../App.css";

const SignupInfo = ({ formData, setFormData }) => {
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
