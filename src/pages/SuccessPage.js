import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/material";

export default function SuccessPage() {
  return (
    <Box
      sx={{
        justifyContent: "flex",
        alignItems: "center",
        fontSize: " 2rem",
        margin: "2rem 0 0 0"
      }}
    >
      <CheckCircleIcon sx={{ color: "rgb(36 70 38)", fontSize: "4rem" }} />
      <p>Successful</p>
    </Box>
  );
}
