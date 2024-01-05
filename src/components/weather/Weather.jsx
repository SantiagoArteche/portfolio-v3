import { Box } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { WeatherPresentational } from "./WeatherPresentational";
import { DarkModeContext } from "../../Context/DarkModeContext";
export const Weather = () => {
  let time = new Date().toLocaleTimeString().toString();
  const [weather, setWeather] = useState([]);
  const [currentTime, setCurrentTime] = useState(time);
  const { darkMode } = useContext(DarkModeContext);

  const updateTime = () => {
    time = new Date().toLocaleTimeString().toString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 15000);

  let hour =
    currentTime.length === 7
      ? currentTime[0]
      : `${currentTime[0]}${currentTime[1]}`;
  let minutes = `${currentTime[3]}${currentTime[4]}`;

  if (hour < 10 && currentTime.length === 7) {
    hour = `0${hour}`;
    minutes = `${currentTime[2]}${currentTime[3]}`;
  }

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
      minutes={minutes}
      Box={Box}
      isNight={isNight}
      weather={weather}
      hour={hour}
      darkMode={darkMode}
    />
  );
};
