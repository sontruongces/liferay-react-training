import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export function Input(props) {
  const {
    name,
    value,
    label,
    placeholder,
    error = null,
    onChange,
    required
  } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      {...(error && { error: true, helperText: error })}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

Input.defaultProps = {
  name: "",
  value: "",
  label: "",
  placeholder: "",
  error: null,
  onChange: null,
  required: false
};
