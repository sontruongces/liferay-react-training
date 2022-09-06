import {
  FormGroup,
  FormControlLabel,
  Checkbox as MuiCheckbox
} from "@mui/material";

export function Checkbox(props) {
  const { label, onHandleValueChange, value, name } = props;

  const convertToDefEventPara = (checkboxName, checkboxValue) => ({
    target: {
      name: checkboxName,
      value: checkboxValue
    }
  });

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            checked={value}
            onChange={(e) =>
              onHandleValueChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
