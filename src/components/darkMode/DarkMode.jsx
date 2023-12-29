import { Box } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export const DarkMode = () => {
  const { changeDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Box
        sx={{
          gridArea: "darkMode",
          bgcolor: "#5f54c78a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          cursor: "pointer",
        }}
        onClick={changeDarkMode}
      >
        {darkMode === "black" ? (
          <BsFillMoonStarsFill fontSize={"4rem"} />
        ) : (
          <MdSunny fontSize={"6rem"} color="white" />
        )}
      </Box>
    </>
  );
};
