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
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  helperText: PropTypes.string
};

Input.defaultProps = {
  name: "",
  value: "",
  label: "",
  placeholder: "",
  onChange: null,
  required: false,
  type: "",
  helperText: ""
};
