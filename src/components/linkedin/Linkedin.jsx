import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Linkedin = () => {
  return (
    <>
      <Box
        component={"a"}
        href="https://www.linkedin.com/in/santiago-arteche/"
        sx={{
          gridArea: "linkedin",
          bgcolor: "#40b9ff8a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          ":hover": { transform: "scale(1.06)" },
          transition: "0.5s",
        }}
      >
        <LinkedInIcon sx={{ color: "white", fontSize: "8rem" }} />
      </Box>
    </>
  );
};
