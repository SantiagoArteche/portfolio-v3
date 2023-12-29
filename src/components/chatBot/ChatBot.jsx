import { Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./chatBot.css";
export const ChatBot = () => {
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
          ":hover": { transform: "scale(1.06)" },
          transition: "0.5s",
        }}
      >
        <Box
          className="flux"
          sx={{
            height: "9.5rem",
            width: "9.5rem",
            padding: "6rem",
            boxShadow: "0px 0px 17px 8px #0313f9fe",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SmartToyIcon
            sx={{
              fontSize: "8rem",
              color: "white",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </>
  );
};
