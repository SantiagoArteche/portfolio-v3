import { Box } from "@mui/material";

export const Cv = () => {
  return (
    <>
      <Box
        component={"a"}
        href="https://www.canva.com/design/DAFzI5XREOg/354jK1_bOsq43ri1FKa6Eg/edit?utm_content=DAFzI5XREOg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        sx={{
          gridArea: "cv",
          bgcolor: "#7b94fa8a",
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Curriculum Vitae
      </Box>
    </>
  );
};
