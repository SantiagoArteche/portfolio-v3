import { Box } from "@mui/material";
export const Age = ({ language }) => {
  return (
    <>
      <Box
        sx={{
          gridArea: "age",
          bgcolor: "#7b94fa8a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <Box fontSize={"8rem"}>25</Box>
        <Box fontSize={"1.5rem"} fontWeight={"bold"}>
          {language === "ES" ? "Años" : "Years Old"}
        </Box>
      </Box>
    </>
  );
};
