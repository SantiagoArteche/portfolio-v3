import { Box, Button, Input } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { ChatBotContext, LanguageContext } from "../../Context";
import { ChatBotIntPresentational } from "./ChatBotIntPresentational";

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
      const API_URL = "https://api.openai.com/v1/chat/completions";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: `${await datos.prompt}` }],
        }),
      };

      if (datos.prompt !== "") {
        resetForm();
        setMessageSend(datos.prompt);
        setMessage("");
        setTimeout(() => {
          setThinking(true);
        }, 700);
        fetch(API_URL, requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setMessage(data.choices[0].message.content);
            setThinking(false);
          });
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
