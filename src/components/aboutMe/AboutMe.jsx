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
              lg: "3.6rem",
            },
            marginBottom: { xs: 2.6, sm: 2, md: 0 },
          }}
        >
          {language === "ES" ? "Hola, Soy Santiago " : "Hello, I'm Santiago "}
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: {
              xs: "0.7rem",
              sm: "1.2rem",
              md: "1.6rem",
              lg: "1.8rem",
            },
            marginRight: {
              xs: 0,
              sm: "1rem",
              md: "13rem",
              lg: "18rem",
              xl: "25.5rem",
            },
            marginTop: 1,
          }}
        >
          {language === "ES"
            ? "Soy desarrollador fullstack con experiencia en React y Node. Soy bueno en CSS y HTML, así como en JavaScript. Me encanta aprender y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mi en mi trabajo."
            : "I am a fullstack developer with experience in React and Node. I'm good at CSS and HTML, as well as JavaScript. I love learning and experimenting with new technologies. I have a good eye for details and always put my all into my work."}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: {
            xs: "",
            md: "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1711425730/PorfolioImg/cvImageBcLOUD_etgmgs.webp)",
            lg: "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1711425428/PorfolioImg/cvImage_1_uwckvk.webp)",
          },
          height: "100%",
          left: { xs: "", md: "49.7%", lg: "50%", xl: "52.5%" },
          width: { md: 230, lg: 300 },
          position: "absolute",
          backgroundRepeat: "no-repeat",
          bottom: { xs: "", md: "27.6%", lg: "33.3%", xl: "32.8%" },
          backgroundPosition: "37%",
          borderBottomRightRadius: "100%",
          borderBottomLeftRadius: "10%",
          border: "none",
          outline: "none",
        }}
      />
    </Box>
  );
};
