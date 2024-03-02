import { Box } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
export const Cv = () => {
  return (
    <Box
      component={"a"}
      href="https://www.canva.com/design/DAFzI5XREOg/354jK1_bOsq43ri1FKa6Eg/edit?utm_content=DAFzI5XREOg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      target="blink"
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
          width: { xs: 100, md: 150, lg: "100%" },
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
