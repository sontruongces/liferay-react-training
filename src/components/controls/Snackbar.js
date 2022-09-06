import { Snackbar as MuiSnackbar, Alert } from "@mui/material";

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
