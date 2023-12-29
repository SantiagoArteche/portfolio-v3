import { Box } from "@mui/material";
export const Projects = ({ language }) => {
  return (
    <>
      <Box
        component={"a"}
        sx={{
          backgroundImage: `url("/img/projectsGiph.gif")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          gridArea: "projects",
          color: "white",
          fontSize: "2.2rem",
          ":hover": { transform: "scale(1.04)" },
          transition: "0.5s",
          cursor: "pointer",
        }}
      >
        <Box sx={{ marginTop: 1, marginRight: 3, textAlign: "end" }}>
          {language === "ES" ? "Proyectos" : "Projects"}
        </Box>
      </Box>
    </>
  );
};
