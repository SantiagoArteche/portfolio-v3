import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { Box } from "@mui/material";
export const Language = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <>
      <Box
        sx={{
          gridArea: "language",
          bgcolor: "#161c908a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: 3,
          color: "white",
          cursor: "pointer",
          ":hover": { transform: "scale(1.06)" },
          transition: "0.5s",
        }}
        onClick={changeLanguage}
      >
        <Box sx={{ fontSize: "8rem", marginTop: 3 }}>{language}</Box>
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
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            ES
          </Box>
          <Box
            sx={{
              color: `${language === "EN" ? "white" : "black"}`,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            EN
          </Box>
        </Box>
      </Box>
    </>
  );
};
