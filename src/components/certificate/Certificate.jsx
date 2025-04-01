import { Box } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
export const Certificate = ({ language }) => {
  return (
    <Box
      component={"a"}
      href="https://pub.coderhouse.com/legacy-certificates/65d0e50a43a4672c7f43f81c?lang=es"
      target="_blank"
      aria-label="certificate-link"
      sx={{
        gridArea: "certificate",
        bgcolor: "#5f54c78a",
        borderRadius: 3,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        textDecoration: "none",
        color: "black",
        ":hover": {
          transform: {
            xs: "scale(1.01)",
            sm: "scale(1.02)",
            md: "scale(1.03)",
            lg: "scale(1.035)",
          },
        },
        transition: "0.5s",
      }}
    >
      <Box
        position="absolute"
        textAlign="center"
        component="p"
        sx={{
          fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.6rem", lg: "2rem" },
          width: { sm: "180px", md: "380px" },
        }}
      >
        {language === "ES" ? "Desarrollador Fullstack" : "Fullstack Developer"}
      </Box>
      <Box
        sx={{
          position: "relative",
          fontSize: { xs: "15px", sm: "18px", md: "20px" },
          left: { xs: 123, sm: 74, md: 195, lg: 264, xl: 305 },
          bottom: { xs: 60, sm: 70, md: 97, lg: 105, xl: 105 },
        }}
      >
        <FaExternalLinkAlt color="white" />
      </Box>
    </Box>
  );
};
