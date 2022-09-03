import "./Footer.css";
import { MobileStepper, Button, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

function Footer() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const backButton = () => {
    return (
      <Button
        sx={{ fontWeight: "bolder" }}
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        {theme.direction === "rtf" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
        Back
      </Button>
    );
  };

  const nextButton = () => {
    return (
      <Button
        sx={{ fontWeight: "bolder" }}
        size="small"
        onClick={handleNext}
        disabled={activeStep === 2}
      >
        Next
        {theme.direction === "rtf" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
    );
  };

  return (
    <div className="footer" style={{}}>
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 700, flexGrow: 1 }}
        backButton={backButton()}
        nextButton={nextButton()}
      />
    </div>
  );
}

export default Footer;
