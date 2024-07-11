import { useContext } from "react";
import { LanguageContext } from "../../Context";
import { Box } from "@mui/material";
export const Language = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <Box
      component="button"
      aria-label="language-button"
      sx={{
        gridArea: "language",
        border: "none",
        bgcolor: "#161c908a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "inherit",
        justifyContent: "space-around",
        borderRadius: 3,
        color: "white",
        cursor: "pointer",
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
      onClick={changeLanguage}
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
          marginTop: 3,
        }}
      >
        {language}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
          width: "100%",
          color: "white",
        }}
      >
        <Box
          sx={{
            color: `${language === "ES" ? "white" : "black"}`,
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.3rem",
              xl: "1.5rem",
            },
            fontWeight: "bold",
          }}
        >
          ES
        </Box>
        <Box
          sx={{
            color: `${language === "EN" ? "white" : "black"}`,
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.3rem",
              xl: "1.5rem",
            },
            fontWeight: "bold",
          }}
        >
          EN
        </Box>
      </Box>
    </Box>
  );
};
