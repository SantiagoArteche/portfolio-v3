export const AgePresentational = ({ language, Box, age }) => {
  return (
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
      >
        {age}
      </Box>
      <Box
        sx={{
          fontSize: { xs: "0.8rem", sm: "1.1rem", md: "1.3rem", lg: "1.7rem" },
        }}
        fontWeight={"bold"}
      >
        {language === "ES" ? "Años" : "Years Old"}
      </Box>
    </Box>
  );
};
