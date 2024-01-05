import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem("language")) === "ES" ? "EN" : "ES" || "ES"
  );

  const changeLanguage = () => {
    language === "ES" ? setLanguage("EN") : setLanguage("ES");
    localStorage.setItem("language", JSON.stringify(language));
  };
  let data = { changeLanguage, language };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
