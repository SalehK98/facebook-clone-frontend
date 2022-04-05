import { Button } from "@mui/material";

function MyButton({ size, text, onClick, sx, hidden = false }) {
  return (
    <Button
      variant="contained"
      size={size}
      onClick={onClick}
      sx={sx}
      hidden={hidden}
    >
      {text}
    </Button>
  );
}

export default MyButton;
