import {
  FormGroup,
  FormControlLabel,
  Checkbox as MuiCheckbox
} from "@mui/material";

export function Checkbox(props) {
  const { label } = props;
  return (
    <FormGroup>
      <FormControlLabel control={<MuiCheckbox />} label={label} />
    </FormGroup>
  );
}
