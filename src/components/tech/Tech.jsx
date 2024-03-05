import { Box } from "@mui/material";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript, SiMongodb, SiMui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export const Tech = () => {
  return (
    <Box
      sx={{
        gridArea: "tech",
        bgcolor: "#161c908a",
        borderRadius: 3,
        fontSize: {
          xs: "1.7rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
          xl: "3.4rem",
        },
        padding: {
          xs: 1,
          sm: 2,
          md: 3.3,
        },
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <IoLogoHtml5 color="#dc3545" />
      <IoLogoCss3 color="rgb(13,110,253)" />
      <BsBootstrapFill color="#9461fb" />
      <SiJavascript color="yellow" />
      <IoLogoReact color="rgb(13,202,240)" />
      <SiMui color="#1e88e5" />
      <TbBrandRedux color="#533484" />
      <IoLogoNodejs color="green" />
      <SiExpress color="white" />
      <SiMongodb color="green" />
      <FaGitAlt color="#dc3545" />
      <FaGithub color="white" />
    </Box>
  );
};
