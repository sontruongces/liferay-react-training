import PropTypes from "prop-types";
import { Button } from "@mui/material";

export function PaginationButton(props) {
  const { sx, size, onClick, disabled, children } = props;

  return (
    <Button sx={sx} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

PaginationButton.propTypes = {
  sx: PropTypes.object,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any
};

PaginationButton.defaultProps = {
  sx: null,
  size: "",
  onClick: null,
  disabled: false,
  children: null
};
