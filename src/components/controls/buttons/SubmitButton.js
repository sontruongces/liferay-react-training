import { Button } from "@mui/material";

export function SubmitButton(props) {
  const { onSubmit } = props;
  return (
    <Button variant="contained" onClick={onSubmit}>
      Summit
    </Button>
  );
}
