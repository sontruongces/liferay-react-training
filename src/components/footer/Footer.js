import "./Footer.css";
import { MobileStepper, Button, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { getCurrentForm } from "../redux/selector";

import { goNextForm, goPreForm } from "../redux/slices/insuranceProfileSlice";

function Footer() {
  const theme = useTheme();
  const currentForm = useSelector(getCurrentForm);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(goNextForm());
  };

  const handleBack = () => {
    dispatch(goPreForm());
  };

  const backButton = () => {
    return (
      <Button
        sx={{ fontWeight: "bolder" }}
        size="small"
        onClick={handleBack}
        disabled={currentForm === 0}
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
        disabled={currentForm === 2}
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
        activeStep={currentForm}
        sx={{ maxWidth: 700, flexGrow: 1 }}
        backButton={backButton()}
        nextButton={nextButton()}
      />
    </div>
  );
}

export default Footer;
