import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

export function Snackbar({ message, openSnackbar, setOpenSnackbar, type }) {
  const handleClose = () => {
    setOpenSnackbar(false);
  };
  return (
    <MuiSnackbar
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

Snackbar.propTypes = {
  message: PropTypes.string,
  openSnackbar: PropTypes.bool,
  setOpenSnackbar: PropTypes.func,
  type: PropTypes.string
};

Snackbar.defaultProps = {
  message: "",
  openSnackbar: false,
  setOpenSnackbar: null,
  type: ""
};
