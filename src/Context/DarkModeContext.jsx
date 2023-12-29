import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("black");

  const changeDarkMode = () => {
    darkMode == "black" ? setDarkMode("white") : setDarkMode("black");
  };
  let data = { darkMode, changeDarkMode };
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};
