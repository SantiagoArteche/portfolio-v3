import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Linkedin = () => {
  return (
    <>
      <Box
        component={"a"}
        href="https://www.linkedin.com/in/santiago-arteche/"
        target="_blank"
        aria-label="linkedin-link"
        sx={{
          gridArea: "linkedin",
          bgcolor: "#40b9ff8a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          ":hover": {
            transform: {
              xs: "scale(1.01)",
              sm: "scale(1.03)",
              md: "scale(1.04)",
              lg: "scale(1.06)",
            },
          },
          transition: "0.5s",
        }}
      >
        <LinkedInIcon
          sx={{
            color: "white",
            fontSize: {
              xs: 70,
              sm: "5.5rem",
              md: "7rem",
              lg: "8rem",
              xl: "8rem",
            },
            position: "absolute",
          }}
        />
        <Box
          sx={{
            position: "relative",
            fontSize: { xs: "15px", sm: "18px", md: "20px" },
            left: { xs: 57, sm: 74, md: 85, lg: 115, xl: 135 },
            bottom: { xs: 60, sm: 70, md: 97, lg: 105, xl: 105 },
          }}
        >
          <FaExternalLinkAlt color="white" />
        </Box>
      </Box>
    </>
  );
};
