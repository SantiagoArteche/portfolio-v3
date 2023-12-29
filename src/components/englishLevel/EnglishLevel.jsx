import { Box } from "@mui/material";
export const EnglishLevel = ({ language }) => {
  return (
    <>
      <Box
        component={"a"}
        href="https://www.efset.org/cert/biWFFB"
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
          ":hover": { transform: "scale(1.06)" },
          transition: "0.5s",
        }}
      >
        <Box fontSize={"8rem"} fontWeight={"bold"}>
          C1
        </Box>
        <Box fontSize={"1.5rem"} fontWeight={"bold"}>
          {language === "ES" ? "Nivel de Inglés" : "English Level"}
        </Box>
      </Box>
    </>
  );
};
