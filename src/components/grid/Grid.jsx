import { Box } from "@mui/material";
import { useContext } from "react";
import { AboutMe } from "../aboutMe/AboutMe";
import { DarkModeContext, LanguageContext } from "../../Context";
import { Language } from "../language/Language";
import { DarkMode } from "../darkMode/DarkMode";
import { Age } from "../age/Age";
import { ProjectsGrid } from "../projectsGrid/ProjectsGrid";
import { Github } from "../github/Github";
import { Linkedin } from "../linkedin/Linkedin";
import { Tech } from "../tech/Tech";
import { Whatsapp } from "../whatsapp/Whatsapp";
import { Mail } from "../mail/Mail";
import { Weather } from "../weather/Weather";
import { EnglishLevel } from "../englishLevel/EnglishLevel";
import { Certificate } from "../certificate/Certificate";
import { Cv } from "../cv/Cv";
import { ChatBotInt, ChatBot } from "../chatBot";
import "animate.css";

export const Grid = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);
  document.title = language === "ES" ? "Portafolio" : "Portfolio";

  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(3, 3, 3, 0.82), rgba(3, 3, 3, 0.82)), url(noisy.gif);`,
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0%",
          left: "0%",
          filter: "opacity(0.2)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        rel="preload"
      />
      <Box
        component="div"
        sx={{
          backgroundColor: darkMode,
          height: "100vh",
          width: "100vw",
          top: "0%",
          left: "0%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <Box
        component="div"
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(2, 9rem)",
            sm: "repeat(3, 11.5rem)",
            md: "repeat(4, 12.8rem)",
            lg: "repeat(4, 17rem)",
            xl: "repeat(4, 19.5rem)",
          },
          gridTemplateRows: {
            xs: "repeat(10, 10rem)",
            sm: "repeat(7, 11rem)",
            md: "repeat(6, 14.5rem)",
            lg: "repeat(6, 15.5rem)",
            xl: "repeat(6, 16rem)",
          },
          gap: { md: 2, sm: 1, xs: 0.5 },
          gridTemplateAreas: {
            xs: `
            "aboutMe aboutMe"
            "language darkMode"
            "projects projects"
            "linkedin age"
            "github github "
            "tech cv"
            "englishLevel wa"
            "weather weather"
            "mail chatbot"
            "certificate certificate"
            `,
            sm: `
            "aboutMe aboutMe aboutMe"
            "language darkMode age"
            "linkedin projects projects"
            "github github tech"
            "englishLevel mail wa"
            "weather weather weather"
            "certificate cv chatbot"
            `,
            md: `
          "aboutMe aboutMe aboutMe language"
          "aboutMe aboutMe aboutMe darkMode " 
          "age linkedin projects projects"
          "github github tech englishLevel"
          "mail weather weather wa"
          "certificate certificate cv chatbot"
          `,
          },
          justifyContent: "center",
        }}
        className="animate__animated animate__fadeInDown animate__slow"
      >
        <AboutMe language={language} />
        <Language />
        <DarkMode />
        <Age language={language} />
        <Linkedin />
        <ProjectsGrid language={language} />
        <Github />
        <Tech />
        <Whatsapp />
        <Mail />
        <Weather />
        <EnglishLevel language={language} />
        <Certificate language={language} />
        <Cv />
        <ChatBot />
      </Box>
      <ChatBotInt />
    </>
  );
};
