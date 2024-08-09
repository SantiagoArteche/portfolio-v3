import { Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FaExternalLinkAlt } from "react-icons/fa";
export const Mail = () => {
  return (
    <>
      <Box
        component={"a"}
        href="mailto:santiagoarteche7@gmail.com"
        aria-label="mail-link"
        sx={{
          gridArea: "mail",
          bgcolor: "#7b94fa8a",
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
        <MailOutlineIcon
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
            fontSize: { xs: "15px", md: "20px", sm: "18px" },
            left: { xs: 54, sm: 74, md: 85, lg: 115, xl: 135 },
            bottom: { xs: 60, sm: 70, md: 97, lg: 105, xl: 105 },
          }}
        >
          <FaExternalLinkAlt color="white" />
        </Box>
      </Box>
    </>
  );
};
