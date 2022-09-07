import PropTypes from "prop-types";
import { Button } from "@mui/material";

export function SubmitButton(props) {
  const { onClick, disabled } = props;
  return (
    <Button disabled={disabled} variant="contained" onClick={onClick}>
      Submit
    </Button>
  );
}

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

SubmitButton.defaultProps = {
  onClick: null,
  disabled: false
};
