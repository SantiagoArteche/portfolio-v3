import { Box } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export const DarkMode = () => {
  const { changeDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <Box
      component="button"
      aria-label="dark-mode-button"
      sx={{
        gridArea: "darkMode",
        bgcolor: "#5f54c78a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        borderRadius: 3,
        cursor: "pointer",
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
      onClick={changeDarkMode}
    >
      {darkMode === "black" ? (
        <Box
          sx={{
            fontSize: {
              xs: "3rem",
              sm: "3.5rem",
              md: "4rem",
              lg: "4.5rem",
              xl: "5rem",
            },
          }}
        >
          <BsFillMoonStarsFill />
        </Box>
      ) : (
        <Box
          sx={{
            fontSize: {
              xs: "4.5rem",
              sm: "5rem",
              md: "5.5rem",
              lg: "6rem",
              xl: "6.5rem",
            },
          }}
        >
          <MdSunny color="white" />
        </Box>
      )}
    </Box>
  );
};
