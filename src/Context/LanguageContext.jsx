import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("ES");

  const changeLanguage = () => {
    language === "ES" ? setLanguage("EN") : setLanguage("ES");
  };
  let data = {
    changeLanguage,
    language,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
