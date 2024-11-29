import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/material";
import SignupInfo from "./SignupInfo";
import PersonalDetails from "./PersonalDetails";
import Location from "./Location";
import Alert from "@mui/material/Alert";
import { validateStep0 } from "../validation/validateSignupInfo";
import "../App.css";

const MultiStepForm = () => {
  const [page, setPage] = useState(0);
  const steps = ["Signup info", "Personal details", "Location"];

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    numberOfCats: "",
    birthday: "",
    state: "",
    country: "",
    galaxy: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignupInfo
          formData={formData}
          setFormData={setFormData}
          emailError={emailError}
          setEmailError={setEmailError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
        />
      );
    } else if (page === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <Location formData={formData} setFormData={setFormData} />;
    }
  };

  if (page === 3) {
    alert("Submitted!");
    setPage(0);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      numberOfCats: "",
      birthday: "",
      state: "",
      country: "",
      galaxy: "",
    });
  }

  const handleNextStep = () => {
    let isValid = true;

    if (page === 0) {
      isValid = validateStep0(formData, setEmailError, setPasswordError);
    }

    if (isValid) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Box className="stepper-container" sx={{ mt: 5, mb: 5 }}>
        <Stepper activeStep={page} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box className="form-container">
        {PageDisplay()}
        <Box className="button-container">
          <Button
            sx={{ pr: 2 }}
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button sx={{ pl: 2 }} disabled={page > 2} onClick={handleNextStep}>
            {page < 2 ? "Next" : "Submit"}
          </Button>
        </Box>
        <Box className="alert-container">
          {emailError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {emailError}
            </Alert>
          )}
          {passwordError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {passwordError}
            </Alert>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MultiStepForm;
