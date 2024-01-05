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
import { ChatBotContext } from "../../Context/ChatBotContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SendIcon from "@mui/icons-material/Send";
import "animate.css";

export const Grid = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);
  const { changeChatState, chatOn } = useContext(ChatBotContext);
  useEffect(() => {
    darkMode;
  }, [darkMode]);
  console.log(chatOn);
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
          filter: "opacity(0.2)",
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
        className="animate__animated animate__fadeInDownBig animate__slow"
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
      <Box
        sx={{
          top: "8%",
          left: "33%",
          position: "fixed",
          display: chatOn,
          backgroundColor: "black",
          height: "80vh",
          width: "35%",
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: 2,
            borderBottom: "5px solid white",
            padding: 3,
          }}
        >
          <Box sx={{ color: "white", fontSize: "3rem" }}>Santiago Bot</Box>
          <Box
            sx={{
              color: "black",
              backgroundColor: "#5f54c78a",
              width: 45,
              borderRadius: 40,
              height: 45,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HighlightOffIcon
              sx={{
                width: "3.5rem",
                height: "3.5rem",
                cursor: "pointer",
              }}
              onClick={changeChatState}
            />
          </Box>
        </Box>
        <Box sx={{ height: 520 }}>
          <Box
            sx={{
              color: "white",
              backgroundColor: "violet",
              width: "max-content",
              maxWidth: "700px",
              margin: 3,
              padding: 3,
              borderRadius: 2,
              fontSize: "1.2rem",
            }}
          >
            Hola, soy el clon de Santiago, que te gustaria saber ?
          </Box>
        </Box>
        <Box
          sx={{
            marginX: 2,
            backgroundColor: "#5f54c78a",
            borderTop: "4px solid rgb(13,110,253)",
            borderEndStartRadius: 20,
            borderEndEndRadius: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 65,
          }}
        >
          <Box sx={{ color: "white", margin: 2, fontSize: "1.1rem" }}>
            Inserte su pregunta...
          </Box>
          <Box
            sx={{
              width: 30,
              paddingX: 5,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              ":hover": {
                backgroundColor: "#6f42c1",
                borderEndEndRadius: 20,
              },
            }}
          >
            <SendIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};
