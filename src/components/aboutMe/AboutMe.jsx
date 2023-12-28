import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./aboutMe.css";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoReact, IoLogoNodejs, IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const AboutMe = () => {
  const [language, setLanguage] = useState("ES");
  const [weather, setWeather] = useState([]);

  let date = new Date();
  let hour = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  hour < 10 && (hour = `0${hour}`);
  minutes < 10 && (minutes = `0${minutes}`);
  const night = ["20", "21", "22", "23", "00", "01", "02", "03", "04", "05"];
  const isNight = night.find((el) => el === hour);

  useEffect(() => {
    const APIkey = "39d19eac955bc798e83d7f0bc5496d55";
    const lat = "-32.9595004";
    const long = "-60.6615415";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [minutes]);

  const MaterialUISwitch = styled(Switch)(() => ({
    width: 100,
    height: 45,
    padding: 6,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(0px)",
      "&.Mui-checked": {
        color: "violet",
        transform: "translateX(55px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "violet"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "white",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "black",
      width: 42,
      height: 42,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "yellow"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "white",
      borderRadius: 15,
    },
  }));

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
          filter: "opacity(0.22)",
          pointerEvents: "none",
          zIndex: 1,
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
                            "github github tech wa"
                            "mail weather weather englishLevel"
                            "spotify spotify certificate chatbot"
                            `,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            gridArea: "aboutMe",
            bgcolor: "#161c908a",
            display: "flex",
            alignItems: "end",
            borderRadius: 3,
            padding: 2,
          }}
        >
          <Box sx={{ color: "white" }}>
            <Box component={"h1"}>
              {language === "ES"
                ? "Hola Soy Santiago"
                : "Hello my name is Santiago"}
            </Box>
            <Box
              component={"p"}
              sx={{
                fontSize: "1.75rem",
                marginRight: "19.5rem",
                marginTop: 1,
              }}
            >
              {language === "ES"
                ? "Soy desarrollador frontend con experiencia en React. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mi en mi trabajo."
                : "I am a frontend developer with experience in React. I'm good at CSS and HTML, as well as JavaScript. I love learning and experimenting with new technologies. I have a good eye for details and always put my all into my work."}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: "language",
            bgcolor: "#161c908a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: 3,
            color: "white",
            cursor: "pointer",
            ":hover": { transform: "scale(1.06)" },
            transition: "0.5s",
          }}
          onClick={() => {
            setLanguage(language == "ES" ? "EN" : "ES");
          }}
        >
          <Box sx={{ fontSize: "8rem", marginTop: 3 }}>{language}</Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
              width: "100%",
              color: "white",
            }}
          >
            <Box
              sx={{
                color: `${language === "ES" ? "white" : "black"}`,
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              ES
            </Box>
            <Box
              sx={{
                color: `${language === "EN" ? "white" : "black"}`,
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              EN
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: "darkMode",
            bgcolor: "#5f54c78a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
          }}
        >
          <FormControlLabel
            control={
              <MaterialUISwitch sx={{ m: 1, marginLeft: 5 }} defaultChecked />
            }
          />
        </Box>
        <Box
          sx={{
            gridArea: "age",
            bgcolor: "#7b94fa8a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Box fontSize={"8rem"}>25</Box>
          <Box fontSize={"1.5rem"} fontWeight={"bold"}>
            {language === "ES" ? "Años" : "Years Old"}
          </Box>
        </Box>
        <Box
          component={"a"}
          href="https://www.linkedin.com/in/santiago-arteche/"
          sx={{
            gridArea: "linkedin",
            bgcolor: "#40b9ff8a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            ":hover": { transform: "scale(1.06)" },
            transition: "0.5s",
          }}
        >
          <LinkedInIcon sx={{ color: "white", fontSize: "8rem" }} />
        </Box>
        <Box
          component={"a"}
          sx={{
            backgroundImage: `url("/img/projectsGiph.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 3,
            gridArea: "projects",
            color: "white",
            fontSize: "2.2rem",
            ":hover": { transform: "scale(1.04)" },
            transition: "0.5s",
          }}
        >
          <Box sx={{ marginTop: 1, marginRight: 3, textAlign: "end" }}>
            {language === "ES" ? "Proyectos" : "Projects"}
          </Box>
        </Box>
        <Box
          component={"a"}
          href="https://github.com/SantiagoArteche"
          sx={{
            gridArea: "github",
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.607), rgba(10, 10, 10, 0.607)), url(/img/githubGiph.gif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 3,
            ":hover": { transform: "scale(1.04)" },
            transition: "0.5s",
          }}
        ></Box>
        <Box
          sx={{
            gridArea: "tech",
            bgcolor: "#161c908a",
            borderRadius: 3,
            fontSize: "3.4rem",
            padding: 3.3,
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
          <IoLogoNodejs color="green" />
          <SiExpress color="white" />
          <SiMongodb color="green" />
          <IoLogoFirebase color="yellow" />
          <FaGitAlt color="#dc3545" />
          <FaGithub color="white" />
        </Box>
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
        <Box
          component={"a"}
          href="mailto:santiarteche@hotmail.com"
          sx={{
            gridArea: "mail",
            bgcolor: "#7b94fa8a",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": { transform: "scale(1.06)" },
            transition: "0.5s",
          }}
        >
          <MailOutlineIcon sx={{ fontSize: "8rem", color: "black" }} />
        </Box>
        <Box
          sx={{
            gridArea: "weather",
            background: `${
              isNight
                ? "linear-gradient(61deg, #020255 0%, #07346b 100%)"
                : "linear-gradient(61deg, #0606b8 0%, #4999fa 100%)"
            }`,
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
                gap: 1.5,
                marginLeft: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                <Box sx={{ fontSize: "4rem" }}>{`${(
                  weather?.main?.temp - 273.15
                ).toFixed(0)}°`}</Box>
              </Box>
              <Box sx={{ fontSize: "2rem" }}>
                {`${hour}:${minutes} `}
                {hour >= "12" ? "PM" : "AM"}
              </Box>
              <Box sx={{ fontSize: "2rem" }}>Rosario, Santa Fe, Argentina.</Box>
            </Box>
            <Box
              sx={{
                background: `${
                  isNight
                    ? "linear-gradient(to bottom right,#3f51b5,#ab47bc 70%)"
                    : "rgb(229, 188, 4)"
                }`,
                height: "12rem",
                width: "12rem",
                borderRadius: "46%",
                boxShadow: `${
                  isNight
                    ? "1px 1px 30px #512da8"
                    : "0px 0px 17px 8px #9b8506ee"
                }`,
                marginRight: 2,
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          component={"a"}
          href="https://www.efset.org/cert/biWFFB"
          sx={{
            gridArea: "englishLevel",
            bgcolor: "#7b94fa8a",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            textDecoration: "none",
            color: "black",
            ":hover": { transform: "scale(1.06)" },
            transition: "0.5s",
          }}
        >
          <Box fontSize={"8rem"} fontWeight={"bold"}>
            C1
          </Box>
          <Box fontSize={"1.5rem"} fontWeight={"bold"}>
            {language === "ES" ? "Nivel de Inglés" : "English Level"}
          </Box>
        </Box>
        <Box
          component={"a"}
          href="https://www.coderhouse.com/certificados/64b25eb5c4c45b00029c544b"
          sx={{
            gridArea: "certificate",
            bgcolor: "#5f54c78a",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "none",
            color: "black",
            ":hover": { transform: "scale(1.06)" },
            transition: "0.5s",
          }}
        >
          {language === "ES"
            ? "Desarrollador FullStack"
            : "FullStack Developer"}
        </Box>
        <Box
          sx={{ gridArea: "spotify", bgcolor: "#40b9ff8a", borderRadius: 3 }}
        >
          14
        </Box>
        <Box
          sx={{
            gridArea: "chatbot",
            bgcolor: "#161c908a",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": { transform: "scale(1.06)" },
            transition: "0.5s",
          }}
        >
          <Box
            className="flux"
            sx={{
              height: "9.5rem",
              width: "9.5rem",
              padding: "6rem",
              boxShadow: "0px 0px 17px 8px #0313f9fe",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SmartToyIcon
              sx={{
                fontSize: "8rem",
                color: "white",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
