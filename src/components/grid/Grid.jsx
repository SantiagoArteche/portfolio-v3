import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { AboutMe } from "../aboutMe/AboutMe";
import { LanguageContext } from "../../Context/LanguageContext";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { Language } from "../language/Language";
import { DarkMode } from "../darkMode/DarkMode";
import { Age } from "../age/Age";
import { Projects } from "../projects/Projects";
import { Github } from "../github/Github";
import { Linkedin } from "../linkedin/Linkedin";
import { Tech } from "../tech/Tech";
import { Whatsapp } from "../whatsapp/Whatsapp";
import { Mail } from "../mail/Mail";
import { Weather } from "../weather/Weather";
import { EnglishLevel } from "../englishLevel/EnglishLevel";
import { Certificate } from "../certificate/Certificate";
import { ChatBot } from "../chatBot/ChatBot";
import { Cv } from "../cv/Cv";

export const Grid = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    darkMode;
  }, [darkMode]);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(3, 3, 3, 0.62), rgba(3, 3, 3, 0.62)), url(/img/noisy.gif);`,
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0%",
          left: "0%",
          filter: "opacity(0.3)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      ></Box>
      <Box
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
      ></Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 18.5rem)",
          gridTemplateRows: "repeat(6, 15rem)",
          gap: 3,
          gridTemplateAreas: `
                            "aboutMe aboutMe aboutMe language "
                            "aboutMe aboutMe aboutMe darkMode  " 
                            "age linkedin projects projects "
                            "github github tech englishLevel"
                            "mail weather weather wa"
                            "certificate certificate cv chatbot"
                            `,
          justifyContent: "center",
        }}
      >
        <AboutMe language={language} />
        <Language />
        <DarkMode />
        <Age language={language} />
        <Linkedin />
        <Projects language={language} />
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
    </>
  );
};
