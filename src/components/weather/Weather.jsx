import { Box } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { WeatherPresentational } from "./WeatherPresentational";
import { DarkModeContext } from "../../Context/DarkModeContext";
export const Weather = () => {
  let time = new Date();
  let hour = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  if (hour < 10) hour = `0${hour}`;
  if (minutes < 10) minutes = `0${minutes}`;
  const timer = `${hour}:${minutes}`;
  const [weather, setWeather] = useState([]);
  const [currentTime, setCurrentTime] = useState(timer);
  const { darkMode } = useContext(DarkModeContext);

  const updateTime = () => {
    let time = new Date();
    let hour = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    setCurrentTime(
      `${hour < 10 ? `0${hour}` : hour}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`
    );
  };
  setInterval(updateTime, 15000);

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
  }, []);

  return (
    <WeatherPresentational
      Box={Box}
      isNight={isNight}
      weather={weather}
      hour={hour}
      darkMode={darkMode}
      currentTime={currentTime}
    />
  );
};
