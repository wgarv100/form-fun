import { Box, Typography, TextField } from "@mui/material";
import "../App.css";

const Success = ({ formData, setFormData }) => {
  return (
    <Box className="location" sx={{ pt: 5, pb: 2 }}>
      <Typography>Location</Typography>
      <TextField
        placeholder="Galaxy"
        variant="standard"
        type="text"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.galaxy}
        onChange={(event) =>
          setFormData({ ...formData, galaxy: event.target.value })
        }
      />
      <TextField
        placeholder="Planet"
        variant="standard"
        type="text"
        sx={{ pt: 3, pb: 3, width: 300 }}
        value={formData.planet}
        onChange={(event) =>
          setFormData({ ...formData, planet: event.target.value })
        }
      />
    </Box>
  );
};

export default Success;
