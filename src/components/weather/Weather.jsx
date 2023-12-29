import { Box } from "@mui/material";
import { useState, useEffect } from "react";
export const Weather = () => {
  const [weather, setWeather] = useState([]);
  let date = new Date();
  let hour = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  const updateTime = () => {
    let minutes = date.getMinutes().toString();
    return minutes;
  };
  setInterval(updateTime, 60000);

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
  return (
    <>
      {" "}
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
                isNight ? "1px 1px 30px #512da8" : "0px 0px 17px 8px #9b8506ee"
              }`,
              marginRight: 2,
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};
