import "./Footer.css";
import { MobileStepper, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { formData, getCurrentForm } from "../redux/selector";
import { PaginationButton, Snackbar } from "../controls";
import {
  goNextForm,
  goPreForm,
  updateError,
  resetErrors
} from "../redux/slices/insuranceProfileSlice";
import {
  insuranceFormSchema,
  beneficiaryFormSchema,
  contractFormSchema
} from "../helper/yupSchema";

function Footer() {
  const data = useSelector(formData);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const currentForm = useSelector(getCurrentForm);
  const theme = useTheme();
  const dispatch = useDispatch();

  let schema;
  if (currentForm === 0) {
    schema = insuranceFormSchema;
  } else if (currentForm === 1) {
    schema = beneficiaryFormSchema;
  } else {
    schema = contractFormSchema;
  }

  const validate = () => {
    schema.validate(data, { abortEarly: false }).catch(function (err) {
      console.log(err.inner);
      dispatch(updateError(err.inner));
      setOpenSnackbar(true);
    });
  };

  const handleNext = async () => {
    const isValid = await schema.isValid(data);
    dispatch(resetErrors());
    if (isValid) {
      dispatch(goNextForm());
    } else {
      validate();
    }
  };

  const handleBack = () => {
    dispatch(goPreForm());
  };

  const backButton = () => {
    return (
      <PaginationButton
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
      </PaginationButton>
    );
  };

  const nextButton = () => {
    return (
      <PaginationButton
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
      </PaginationButton>
    );
  };

  return (
    <div className="footer">
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={currentForm}
        sx={{ maxWidth: 700, flexGrow: 1 }}
        backButton={backButton()}
        nextButton={nextButton()}
      />
      <Snackbar
        type="error"
        message="Validation Error"
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </div>
  );
}

export default Footer;
