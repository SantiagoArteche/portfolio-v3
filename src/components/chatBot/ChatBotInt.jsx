import { Box, Button, Input } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { ChatBotContext, LanguageContext } from "../../context";
import { ChatBotIntPresentational } from "./ChatBotIntPresentational";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const ChatBotInt = () => {
  const [message, setMessage] = useState("");
  const [messageSend, setMessageSend] = useState(null);
  const [thinking, setThinking] = useState(false);
  const { changeChatState, chatOn } = useContext(ChatBotContext);
  const { language } = useContext(LanguageContext);

  const { handleSubmit, handleChange, resetForm, values } = useFormik({
    initialValues: {
      prompt: "",
    },

    onSubmit: async (datos) => {
      if (datos.prompt !== "") {
        resetForm();
        setMessageSend(datos.prompt);
        setMessage("");
        setTimeout(() => {
          setThinking(true);
        }, 400);

        const result = await model.generateContent(datos.prompt);
        const response = await result.response;
        const text = response.text();

        setTimeout(() => {
          setMessage(
            text.split("**").join("").split("*").join("").split("##").join("")
          );
          setThinking(false);
        }, 700);
      }
    },
    validateOnChange: false,
  });
  return (
    <ChatBotIntPresentational
      Box={Box}
      Button={Button}
      Input={Input}
      HighlightOffIcon={HighlightOffIcon}
      SendIcon={SendIcon}
      message={message}
      messageSend={messageSend}
      thinking={thinking}
      changeChatState={changeChatState}
      chatOn={chatOn}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      language={language}
      values={values}
    />
  );
};
