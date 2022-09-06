import { Stack, Alert, Link, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { formData } from "../redux/selector";
import { ONLINE_CONTRACT } from "../constants";
import { Form, Checkbox, SubmitButton } from "../controls";
import { insuranceFormSchema } from "../helper/yupSchema";
import { updateError } from "../redux/slices/insuranceProfileSlice";

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
  const data = useSelector(formData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const classes = useAlertIconStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    const valid = await insuranceFormSchema.isValid(data);
    if (!valid) {
      insuranceFormSchema
        .validate(data, { abortEarly: false })
        .catch(function (err) {
          console.log(err);
          dispatch(updateError(err.inner));
        });
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
              <Link sx={{ cursor: "pointer" }} href onClick={handleOpen}>
                here
              </Link>
            </Box>
            <Box>
              <Checkbox label="I agree to submit my information to the Insurance Company after checking the online contract" />
            </Box>
          </Alert>
        </Stack>
        <Box sx={{ margin: "2rem 1rem", textAlign: "right" }}>
          <SubmitButton onClick={onSubmit} />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
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
    </Form>
  );
}
