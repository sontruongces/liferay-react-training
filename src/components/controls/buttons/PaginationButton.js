import { Button } from "@mui/material";

export function PaginationButton(props) {
  const { sx, size, onClick, disabled, children } = props;

  return (
    <Button sx={sx} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}
