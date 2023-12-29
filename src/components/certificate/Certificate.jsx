import { Box } from "@mui/material";
export const Certificate = ({ language }) => {
  return (
    <>
      <Box
        component={"a"}
        href="https://www.coderhouse.com/certificados/64b25eb5c4c45b00029c544b"
        sx={{
          gridArea: "certificate",
          bgcolor: "#5f54c78a",
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
          ":hover": { transform: "scale(1.04)" },
          transition: "0.5s",
        }}
      >
        {language === "ES" ? "Desarrollador FullStack" : "FullStack Developer"}
      </Box>
    </>
  );
};
