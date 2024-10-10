import { Box } from "@mui/material";
import { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { LanguageContext } from "../../Context/LanguageContext";
export const Cv = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Box
      component={"a"}
      href={
        language === "ES"
          ? `/CV-SANTIAGOARTECHE.pdf`
          : `/CV-SANTIAGOARTECHE-EN.pdf`
      }
      target="_blank"
      aria-label="cv-link"
      sx={{
        gridArea: "cv",
        bgcolor: "#7b94fa8a",
        borderRadius: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
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
      <Box
        position="absolute"
        textAlign="center"
        sx={{
          fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.6rem", lg: "2rem" },
          width: { xs: 100, md: 150, lg: 250 },
        }}
      >
        Curriculum Vitae
      </Box>
      <Box
        sx={{
          position: "relative",
          fontSize: { xs: "15px", sm: "18px", md: "20px" },
          left: { xs: 54, sm: 74, md: 85, lg: 115, xl: 135 },
          bottom: { xs: 60, sm: 70, md: 97, lg: 105, xl: 105 },
        }}
      >
        <FaExternalLinkAlt color="white" />
      </Box>
    </Box>
  );
};
