import { Button } from "@mui/material";

export function SubmitButton(props) {
  const { onClick } = props;
  return (
    <Button variant="contained" onClick={onClick}>
      Submit
    </Button>
  );
}
