import { Box } from "@mui/material";

export const AboutMe = ({ language }) => {
  return (
    <Box
      sx={{
        gridArea: "aboutMe",
        bgcolor: "#161c908a",
        display: "flex",
        alignItems: "end",
        borderRadius: 3,
        padding: 2,
      }}
    >
      <Box sx={{ color: "white" }}>
        <Box component={"h1"}>
          {language === "ES"
            ? "Hola Soy Santiago"
            : "Hello my name is Santiago"}
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: "1.75rem",
            marginRight: "19.5rem",
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
