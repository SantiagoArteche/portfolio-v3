import { Box } from "@mui/material";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import {
  SiJavascript,
  SiMongodb,
  SiSpring,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

export const Tech = () => {
  return (
    <Box
      sx={{
        gridArea: "tech",
        bgcolor: "#161c908a",
        borderRadius: 3,
        gap: { xs: 1, lg: 2 },
        fontSize: {
          xs: "1.6rem",
          sm: "2rem",
          md: "2.32rem",
          lg: "2.7rem",
          xl: "2.9rem",
        },
        padding: {
          xs: 1,
          sm: 2,
        },
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <IoLogoHtml5 color="#dc3545" />
      <IoLogoCss3 color="rgb(13,110,253)" />
      <BsBootstrapFill color="#9461fb" />
      <SiTailwindcss color="rgb(13,202,240)" />
      <SiJavascript color="yellow" />
      <SiTypescript color="rgb(13,110,253)" />
      <FaJava color="#1e88e5" />
      <SiPython color="#3776ab" />
      <IoLogoReact color="rgb(13,202,240)" />
      <SiSpring color="green" />
      <IoLogoNodejs color="green" />
      <SiExpress color="white" />
      <SiMongodb color="green" />
      <SiPostgresql color="rgb(13,110,253)" />
      <FaGitAlt color="#dc3545" />
      <FaGithub color="white" />
    </Box>
  );
};
