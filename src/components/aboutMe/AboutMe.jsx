import { Box } from "@mui/material";

export const AboutMe = ({ language }) => {
  return (
    <Box
      sx={{
        gridArea: "aboutMe",
        bgcolor: "#161c908a",
        display: "flex",
        alignItems: "end",
        textAlign: { sm: "center", md: "start" },
        borderRadius: 3,
        padding: 2,
      }}
    >
      <Box sx={{ color: "white" }}>
        <Box
          component={"h1"}
          sx={{
            textAlign: { xs: "center", md: "start" },
            fontSize: {
              xs: "1.5rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "4rem",
              xl: "4.3rem",
            },
            marginBottom: { xs: 3.8, md: 0, sm: 3 },
          }}
        >
          {language === "ES"
            ? "Hola Soy Santiago"
            : "Hello my name is Santiago"}
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "1.2rem",
              md: "1.6rem",
              lg: "1.95rem",
              xl: "2.1rem",
            },
            marginRight: {
              xs: 0,
              sm: "1rem",
              md: "13rem",
              lg: "18rem",
              xl: "19.5rem",
            },
            marginTop: 1,
          }}
        >
          {language === "ES"
            ? "Soy desarrollador frontend con experiencia en React. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mi en mi trabajo."
            : "I am a frontend developer with experience in React. I'm good at CSS and HTML, as well as JavaScript. I love learning and experimenting with new technologies. I have a good eye for details and always put my all into my work."}
        </Box>
      </Box>
    </Box>
  );
};
