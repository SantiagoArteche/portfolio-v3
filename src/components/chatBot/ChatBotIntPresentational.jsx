import "./chatBot.css";
export const ChatBotIntPresentational = ({
  Box,
  chatOn,
  changeChatState,
  Input,
  handleSubmit,
  HighlightOffIcon,
  handleChange,
  messageSend,
  message,
  thinking,
  Button,
  SendIcon,

}) => {
  return (
    <Box
      sx={{
        top: "8%",
        left: { xs: "19%", sm: "25%", lg: "33%" },
        position: "fixed",
        display: chatOn,
        backgroundColor: "black",
        height: "85vh",
        width: { xs: "65%", sm: "55%", lg: "48%", xl: "37%" },
        borderRadius: 3,
      }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: 2,
          borderBottom: "5px solid white",
          padding: 3,
        }}
      >
        <Box sx={{ color: "white", fontSize: "3rem" }}>Santiago Bot</Box>
        <Box
          sx={{
            color: "black",
            backgroundColor: "#5f54c78a",
            width: 45,
            borderRadius: 40,
            height: 45,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HighlightOffIcon
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              cursor: "pointer",
            }}
            onClick={changeChatState}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: 595,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Box
            sx={{
              backgroundColor: "violet",
              width: "max-content",
              maxWidth: "430px",
              margin: 3,
              padding: 3,
              borderRadius: 2,
            }}
          >
            Hola, soy el clon de Santiago, que te gustaria saber ?
          </Box>
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "end",
          }}
        >
          {messageSend ? (
            <Box
              sx={{
                backgroundColor: "#161c908a",
                width: "max-content",
                maxWidth: "430px",
                margin: 3,
                padding: 3,
                borderRadius: 2,
              }}
            >
              {messageSend}
            </Box>
          ) : null}
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "start",
          }}
        >
          {message.length > 0 ? (
            <Box
              sx={{
                backgroundColor: "violet",
                width: "max-content",
                maxWidth: "430px",
                margin: 3,
                padding: 3,
                borderRadius: 2,
              }}
            >
              {message}
            </Box>
          ) : (
            messageSend != null &&
            thinking && (
              <Box
                sx={{
                  backgroundColor: "violet",
                  width: "max-content",
                  maxWidth: "430px",
                  margin: 3,
                  padding: 3,
                  borderRadius: 2,
                }}
              >
                Thinking...
              </Box>
            )
          )}
        </Box>
      </Box>
      <Box
        sx={{
          marginX: 2,
          backgroundColor: "#5f54c78a",
          borderTop: "4px solid rgb(13,110,253)",
          borderEndStartRadius: 20,
          borderEndEndRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 65,
        }}
      >
        <Input
          name="prompt"
          onChange={handleChange}
          placeholder="Inserte su pregunta..."
          sx={{
            color: "white",
            margin: 2,
            fontSize: "1.1rem",
            width: "100%",
            ":before": { border: 0 },
            "::before": { border: 0, content: "none" },
            "::after": { border: 0 },
            "input:-internal-autofill-selected": {
              background: "none !important",
            },
            content: "none",
          }}
        />
          
        <Button
          sx={{
            paddingX: 4,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderEndEndRadius: 20,
            ":hover": {
              backgroundColor: "#6f42c1",
            },
          }}
          type="submit"
        >
          <Box sx={{ width: 30 }}>
            <SendIcon />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
