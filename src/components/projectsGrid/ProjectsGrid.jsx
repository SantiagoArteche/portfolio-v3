import { Box } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export const ProjectsGrid = ({ language }) => {
  return (
    <Box
      component={Link}
      to="/projects"
      sx={{
        backgroundImage: `url(projectsGiph_du64rj.gif)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textDecoration: "none",
        borderRadius: 3,
        gridArea: "projects",
        color: "white",
        fontSize: {
          xs: "1.5rem",
          sm: "1.9rem",
          md: "2rem",
          lg: "2.1rem",
          xl: "2.2rem",
        },
        ":hover": {
          transform: {
            xs: "scale(1.01)",
            sm: "scale(1.02)",
            md: "scale(1.03)",
            lg: "scale(1.035)",
          },
        },
        transition: "0.5s",
        cursor: "pointer",
      }}
    >
      <Box>
        <Box
          sx={{
            marginTop: 1,
            marginLeft: 3,
            textAlign: "center",
          }}
        >
          {language === "ES" ? "Proyectos" : "Projects"}
        </Box>
        <Box
          sx={{
            position: "relative",
            fontSize: { xs: "15px", sm: "18px", md: "20px" },
            width: 3,
            left: { xs: 265, sm: 349, md: 396, lg: 537, xl: 615 },
            bottom: { xs: 30, sm: 38 },
          }}
        >
          <FaExternalLinkAlt color="white" />
        </Box>
      </Box>
    </Box>
  );
};
