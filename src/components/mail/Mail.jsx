import { Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
export const Mail = () => {
  return (
    <>
      <Box
        component={"a"}
        href="mailto:santiarteche@hotmail.com"
        sx={{
          gridArea: "mail",
          bgcolor: "#7b94fa8a",
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ":hover": { transform: "scale(1.06)" },
          transition: "0.5s",
        }}
      >
        <MailOutlineIcon sx={{ fontSize: "8rem", color: "black" }} />
      </Box>
    </>
  );
};
