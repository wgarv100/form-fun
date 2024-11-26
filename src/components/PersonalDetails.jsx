import { Box, Typography, TextField } from "@mui/material";
import "../App.css";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <Box className="personal-details" sx={{ pt: 5, pb: 2 }}>
      <Typography>Personal Details</Typography>
      <TextField
        placeholder="Name"
        type="text"
        variant="standard"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <TextField
        placeholder="Number of cats"
        type="number"
        variant="standard"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.numberOfCats}
        onChange={(event) =>
          setFormData({ ...formData, numberOfCats: event.target.value })
        }
      />
      <TextField
        placeholder="Birthday"
        type="date"
        variant="standard"
        sx={{ pt: 3, pb: 3, width: 300 }}
        InputLabelProps={{ shrink: true }}
        value={formData.birthday}
        onChange={(event) =>
          setFormData({ ...formData, birthday: event.target.value })
        }
      />
    </Box>
  );
};

export default PersonalDetails;
