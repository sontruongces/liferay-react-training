import { Button } from "@mui/material";

export function SubmitButton(props) {
  const { onClick, disabled } = props;
  return (
    <Button disabled={disabled} variant="contained" onClick={onClick}>
      Submit
    </Button>
  );
}
