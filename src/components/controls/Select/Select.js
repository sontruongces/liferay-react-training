import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem
} from "@mui/material";

export function Select(props) {
  const { name, label, value, onChange, options, required } = props;
  return (
    <FormControl variant="outlined" required={required}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  required: PropTypes.bool
};

Select.defaultProps = {
  name: "",
  label: "",
  value: "",
  onChange: null,
  options: [],
  required: false
};
