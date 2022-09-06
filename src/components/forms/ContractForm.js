import { Stack, Alert, Link, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { ONLINE_CONTRACT } from "../../constants";
import { Form, Checkbox, SubmitButton, useForm, Snackbar } from "../controls";
import { formData } from "../../redux/selector";
import { addInsurance } from "../../services";

const initialValue = {
  agreement: false
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const useAlertIconStyles = makeStyles(() => ({
  root: {
    "& .MuiAlert-icon": {
      display: "none"
    }
  }
}));

export default function ContractForm() {
  const navigate = useNavigate();
  const data = useSelector(formData);
  const { values, onHandleValueChange } = useForm(initialValue);
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useAlertIconStyles();
  const disableSubmitButton = !values.agreement;
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInsurance(JSON.stringify(data));
      navigate("/success");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setOpenSnackbar(true);
    }
  };
  return (
    <Form>
      <Box>
        <h1>{ONLINE_CONTRACT}</h1>
        <Stack>
          <Alert
            className={classes.root}
            sx={{ textAlign: "left" }}
            severity="info"
          >
            <Box>
              Please see the detail contract{" "}
              <Link sx={{ cursor: "pointer" }} onClick={handleOpenModal}>
                here
              </Link>
            </Box>
            <Box>
              <Checkbox
                name="agreement"
                onHandleValueChange={onHandleValueChange}
                value={values.agreement}
                label="I agree to submit my information to the Insurance Company after checking the online contract"
              />
            </Box>
          </Alert>
        </Stack>
        <Box sx={{ margin: "2rem 1rem", textAlign: "right" }}>
          <SubmitButton disabled={disableSubmitButton} onClick={onSubmit} />
        </Box>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contract
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Snackbar
        message={errorMessage}
        openSnackbar={openSnackbar}
        type="error"
        setOpenSnackbar={setOpenSnackbar}
      />
    </Form>
  );
}
