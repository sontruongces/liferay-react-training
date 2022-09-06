import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const style = makeStyles(() => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "red"
    }
  }
}));

export function Input(props) {
  const {
    name,
    value,
    label,
    placeholder,
    error = null,
    onChange,
    required,
    type,
    helperText
  } = props;
  const classes = style();
  return (
    <TextField
      className={classes.root}
      InputLabelProps={{ shrink: true }}
      helperText={helperText}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      type={type}
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
