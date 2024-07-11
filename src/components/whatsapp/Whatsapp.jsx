import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Whatsapp = () => {
  return (
    <Box
      component={"a"}
      href="https://wa.me/3413650110"
      target="_blank"
      aria-label="wa-link"
      sx={{
        gridArea: "wa",
        bgcolor: "#0cd473",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
      <WhatsAppIcon
        sx={{
          position: "absolute",
          color: "black",
          fontSize: {
            xs: "4rem",
            sm: "5.5rem",
            md: "7rem",
            lg: "8rem",
            xl: "8rem",
          },
        }}
      />
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
