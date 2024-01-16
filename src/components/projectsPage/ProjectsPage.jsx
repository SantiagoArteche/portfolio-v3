import { Box } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { LanguageContext } from "../../Context/LanguageContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
export const ProjectsPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);
  document.title =
    language === "ES" ? "Portafolio - Proyectos" : "Portfolio - Projects";

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(3, 3, 3, 0.62), rgba(3, 3, 3, 0.62)), url(/img/noisy.gif);`,
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0%",
          left: "0%",
          filter: "opacity(0.2)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: darkMode,
          height: "100vh",
          width: "100vw",
          top: "0%",
          left: "0%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#161c908a",
              width: {
                xs: "90vw",
                sm: "35.5rem",
                md: "55rem",
                lg: "71rem",
                xl: "92rem",
              },
              height: "11rem",
              padding: 3,
              borderRadius: 3,
              color: "white",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <ArrowBackIcon
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "3.5rem",
                    md: "4rem",
                    lg: "4.5rem",
                    xl: "5rem",
                  },
                  color: "white",
                }}
              />
            </Link>
            <Box
              sx={{
                marginLeft: { xs: 2, sm: 3 },
                fontSize: {
                  xs: "3rem",
                  sm: "3.5rem",
                  md: "4rem",
                  lg: "4.5rem",
                  xl: "5rem",
                },
              }}
            >
              {language === "ES" ? "Proyectos" : "Projects"}
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(3, 22vw)",
                sm: "repeat(4, 7rem)",
                md: "repeat(6, 6.2rem)",
                lg: "repeat(6, 8rem)",
                xl: "repeat(6, 11.5rem)",
              },
              gridTemplateRows: {
                xs: "repeat(5, 20rem)",
                sm: "repeat(3, 17rem)",
                md: "repeat(2, 22rem)",
                lg: "repeat(2, 24rem)",
                xl: "repeat(2, 28rem)",
              },
              gridTemplateAreas: {
                xs: `"ecomReact ecomReact ecomReact  "
                " ecomJs ecomJs ecomJs "
                "asociacion asociacion asociacion"
                "amInd amInd amInd"
                "blogCafe blogCafe blogCafe"`,
                sm: `"ecomReact ecomReact ecomJs ecomJs "
                " blogCafe blogCafe amInd amInd "
                "asociacion asociacion asociacion asociacion"`,
                md: `"ecomReact ecomReact ecomJs ecomJs blogCafe blogCafe"
              "asociacion asociacion asociacion amInd amInd amInd"`,
              },
              gap: { xs: 5, md: 7, lg: 8.5, xl: 9 },
              justifyContent: "center",
            }}
          >
            <Box
              component={"a"}
              href="https://ecommerce-react-js-arteche.vercel.app/"
              sx={{
                gridArea: "ecomReact",
                background:
                  "url(https://res.cloudinary.com/diisow8ys/image/upload/v1704950720/OffStore_-_Google_Chrome_11_1_20_siypls.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "210% 100%", xl: "cover" },
                backgroundPosition: "center",
                borderRadius: 4,
                cursor: "pointer",
                objectFit: "cover",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                textDecoration: "none",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".eReact": {
                    display: "flex",
                    flexDirection: "column",
                  },
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  padding: 2,
                  textAlign: "center",

                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  gap: 3,
                }}
                className="eReact"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "1.8rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    textDecoration: "underline 4px solid black",
                  }}
                >
                  {language === "ES" ? "Tecnologías" : "Technologies"}
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.2rem",
                      md: "1.5rem",
                      lg: "1.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box>ReactJS</Box>
                  <Box>Bootstrap</Box>
                  <Box>React Router Dom</Box>
                  <Box>Formik</Box>
                  <Box>Yup</Box>
                </Box>
              </Box>
            </Box>
            <Box
              component={"a"}
              href="https://asociacion.vercel.app/"
              sx={{
                gridArea: "asociacion",
                background:
                  "url(https://res.cloudinary.com/diisow8ys/image/upload/v1704951010/Asociaci%C3%B3n_Suipacha_-_Google_Chr_z9kx35.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
                cursor: "pointer",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                borderRadius: 4,
                textDecoration: "none",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".asoc": {
                    display: "flex",
                    flexDirection: "column",
                  },
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  padding: 2,
                  textAlign: "center",
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  gap: 3,
                }}
                className="asoc"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "1.8rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    marginLeft: 1,
                    textDecoration: "underline 4px solid black",
                  }}
                >
                  {language === "ES" ? "Tecnologías" : "Technologies"}
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.2rem",
                      md: "1.5rem",
                      lg: "1.8rem",
                    },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Box>ReactJS</Box>
                    <Box>MaterialUI</Box>
                    <Box>React Router Dom</Box>
                    <Box>Formik</Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Box>Yup</Box>
                    <Box>NodeJS</Box>
                    <Box>Express</Box>
                    <Box>MongoDB</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              component={"a"}
              href="https://santiagoarteche.github.io/ProyectoFinal-SantiagoArteche/"
              sx={{
                gridArea: "ecomJs",
                background:
                  "url(https://res.cloudinary.com/diisow8ys/image/upload/v1704951090/OffStore_-_MainPage_-_Google_Chr_khpy1r.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "210% 100%", xl: "cover" },
                backgroundPosition: "59%",
                borderRadius: 4,
                cursor: "pointer",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                textDecoration: "none",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".eJs": {
                    display: "flex",
                    flexDirection: "column",
                  },
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  padding: 2,
                  textAlign: "center",

                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  gap: 3,
                }}
                className="eJs"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "1.8rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    textDecoration: "underline 4px solid black",
                  }}
                >
                  {language === "ES" ? "Tecnologías" : "Technologies"}
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.2rem",
                      md: "1.5rem",
                      lg: "1.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box>HTML5</Box>
                  <Box>CSS3</Box>
                  <Box>Sass</Box>
                  <Box>Bootstrap</Box>
                  <Box>JavaScript</Box>
                </Box>
              </Box>
            </Box>
            <Box
              component={"a"}
              href="https://santiagoarteche.github.io/BlogDeCafe/"
              sx={{
                gridArea: "blogCafe",
                backgroundImage:
                  "url(https://res.cloudinary.com/diisow8ys/image/upload/v1704950899/BlogDeCaf%C3%A9_-_Inicio_-_Google_Chr_qfguvb.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "232% 100%", xl: "cover" },
                backgroundPosition: "51%",
                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".cafe": {
                    display: "flex",
                    flexDirection: "column",
                  },
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  padding: 2,
                  textAlign: "center",
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  gap: 3,
                }}
                className="cafe"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "1.8rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    textDecoration: "underline 4px solid black",
                  }}
                >
                  {language === "ES" ? "Tecnologías" : "Technologies"}
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.2rem",
                      md: "1.5rem",
                      lg: "1.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box>HTML5</Box>
                  <Box>CSS3</Box>
                  <Box>Sass</Box>
                  <Box>Bootstrap</Box>
                </Box>
              </Box>
            </Box>
            <Box
              component={"a"}
              href="https://am-foreverchic.vercel.app/"
              sx={{
                gridArea: "amInd",
                background:
                  "url(https://res.cloudinary.com/diisow8ys/image/upload/v1704950615/AM_Forever_Chic_-_Google_Chrome_rvkymd.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                  xs: "200% 100%",
                  md: "100% 100%",
                  xl: "cover",
                },
                backgroundPosition: { xs: "10%", md: "22%" },
                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".am": {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  },
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  padding: 2,
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                  gap: 3,
                }}
                className="am"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "1.8rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },

                    textDecoration: "underline 4px solid black",
                  }}
                >
                  {language === "ES" ? "Tecnologías" : "Technologies"}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",

                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.2rem",
                      md: "1.5rem",
                      lg: "1.8rem",
                    },
                    gap: 2,
                  }}
                >
                  <Box>ReactJS</Box>
                  <Box>MaterialUI</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
