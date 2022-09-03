import "./Header.css";
import { Toolbar, Stepper, StepLabel, Step, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { FORM_STEPS } from "../constants";
import { getCurrentForm } from "../redux/selector";

function Header() {
  const currentForm = useSelector(getCurrentForm);
  return (
    <div className="header">
      <Toolbar>
        <h1>Insurance Profile Submission</h1>
      </Toolbar>
      <Box sx={{ marginTop: "2rem", width: "50%", display: "inline-block" }}>
        <Stepper activeStep={currentForm} alternativeLabel>
          {FORM_STEPS.map((label) => (
            <Step key={label}>
              <StepLabel sx={{ color: "red" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default Header;
