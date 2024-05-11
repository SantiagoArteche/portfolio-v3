import { ChatBotContextProvider } from "./ChatBotContext";
import { DarkModeContextProvider } from "./DarkModeContext";
import { LanguageContextProvider } from "./LanguageContext";

export const GeneralProvider = ({ children }) => {
  return (
    <ChatBotContextProvider>
      <DarkModeContextProvider>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </DarkModeContextProvider>
    </ChatBotContextProvider>
  );
};
