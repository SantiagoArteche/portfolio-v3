import { Box } from "@mui/material";
import { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DarkModeContext } from "../../Context/DarkModeContext";
export const Github = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Box
      component={"a"}
      href="https://github.com/SantiagoArteche"
      target="blink"
      sx={{
        gridArea: "github",
        backgroundImage:
          darkMode === "black"
            ? `linear-gradient(to bottom, rgba(10, 10, 10, 0.607), rgba(10, 10, 10, 0.607)), url(https://res.cloudinary.com/santiago-arteche/image/upload/v1711422158/PorfolioImg/githubGiph_iboahp.gif)`
            : `linear-gradient(to bottom, rgba(10, 10, 10, 0.07), rgba(10, 10, 10, 0.007)), url(https://res.cloudinary.com/santiago-arteche/image/upload/v1711422158/PorfolioImg/githubGiph_iboahp.gif)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 3,
        ":hover": {
          transform: {
            xs: "scale(1.01)",
            sm: "scale(1.02)",
            md: "scale(1.03)",
            lg: "scale(1.035)",
          },
        },
        transition: "0.5s",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 7,
          fontSize: { xs: "15px", sm: "18px", md: "20px" },
          left: { xs: 265, sm: 353, md: 395, lg: 532, xl: 615 },
          top: 8,
        }}
      >
        <FaExternalLinkAlt color="white" />
      </Box>
    </Box>
  );
};
