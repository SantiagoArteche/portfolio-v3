import { Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ChatBotContext } from "../../context/ChatBotContext";

export const ChatBot = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { changeChatState } = useContext(ChatBotContext);
  return (
    <>
      <Box
        sx={{
          gridArea: "chatbot",
          bgcolor: "#161c908a",
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",

          ":hover": {
            transform: {
              xs: "scale(1.01)",
              sm: "scale(1.03)",
              md: "scale(1.04)",
              lg: "scale(1.06)",
            },
          },
          transition: "0.5s",
        }}
        onClick={changeChatState}
      >
        <Box
          className="flux"
          sx={{
            height: { xs: "7rem", sm: "8rem", md: "9rem", lg: "9.5rem" },
            width: { xs: "7rem", sm: "8rem", md: "9rem", lg: "9.5rem" },
            padding: { sm: "4rem", md: "5rem", lg: "6rem", xl: "6rem" },
            boxShadow:
              darkMode === "black"
                ? "0px 0px 17px 13px #0313f9fe"
                : "0px 0px 17px 13px #ffa3f1",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SmartToyIcon
            sx={{
              fontSize: {
                xs: "5rem",
                sm: "5.5rem",
                md: "7rem",
                lg: "8rem",
                xl: "8rem",
              },
              color: "white",
            }}
          />
        </Box>
      </Box>
    </>
  );
};
