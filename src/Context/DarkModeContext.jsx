import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) === "black"
      ? "white"
      : "black" || "black"
  );

  const changeDarkMode = () => {
    darkMode === "black" ? setDarkMode("white") : setDarkMode("black");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  };
  let data = { darkMode, changeDarkMode };
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};
