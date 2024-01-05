import { createContext, useState } from "react";

export const ChatBotContext = createContext();

export const ChatBotContextProvider = ({ children }) => {
  const [chatOn, setChatOn] = useState("none");
  const changeChatState = () => {
    chatOn === "none" ? setChatOn("block") : setChatOn("none");
  };
  const data = { changeChatState, chatOn };
  return (
    <ChatBotContext.Provider value={data}>{children}</ChatBotContext.Provider>
  );
};
