import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export const Whatsapp = () => {
  return (
    <>
      <Box
        component={"a"}
        href="https://wa.me/3413650110"
        sx={{
          gridArea: "wa",
          bgcolor: "#0cd473",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ":hover": { transform: "scale(1.06)" },
          transition: "0.5s",
        }}
      >
        <WhatsAppIcon sx={{ color: "black", fontSize: "8rem" }} />
      </Box>
    </>
  );
};
