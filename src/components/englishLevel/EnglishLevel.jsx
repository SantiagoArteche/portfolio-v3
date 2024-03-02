import { Box } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
export const EnglishLevel = ({ language }) => {
  return (
    <Box
      component={"a"}
      href="https://www.efset.org/cert/biWFFB"
      target="blink"
      sx={{
        gridArea: "englishLevel",
        bgcolor: "#7b94fa8a",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        textDecoration: "none",
        color: "black",
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
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontSize: {
              xs: "4rem",
              sm: "5.5rem",
              md: "7rem",
              lg: "8rem",
              xl: "8rem",
            },
          }}
          fontWeight={"bold"}
        >
          C1
        </Box>
        <Box
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1.1rem",
              md: "1.3rem",
              lg: "1.7rem",
            },
          }}
          fontWeight={"bold"}
        >
          {language === "ES" ? "Nivel de Inglés" : "English Level"}
        </Box>
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
