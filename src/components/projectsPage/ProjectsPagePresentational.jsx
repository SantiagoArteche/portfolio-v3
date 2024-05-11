import { ArrowBack, ArrowForward, ArrowOutward } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const ProjectsPagePresentational = ({
  darkMode,
  language,
  calendar,
  journal,
  asoc,
  gif,
  heroes,
  am,
  eReact,
  eJs,

  handleContentView,
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(3, 3, 3, 0.82), rgba(3, 3, 3, 0.82)), url(/noisy.gif);`,
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0%",
          left: "0%",
          filter: "opacity(0.2)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        component="img"
      />
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
      />
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

              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <Link to="/" style={{}}>
              <ArrowBack
                sx={{
                  fontSize: {
                    xs: "3rem",
                    sm: "3.5rem",
                    md: "4rem",
                    lg: "4.5rem",
                    xl: "5rem",
                  },
                  color: "white",
                  ":hover": { color: darkMode === "black" ? "gray" : "black" },
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
                sm: "repeat(3, 10rem)",
                md: "repeat(6, 6.2rem)",
                lg: "repeat(6, 8rem)",
                xl: "repeat(6, 11.5rem)",
              },
              gridTemplateRows: {
                xs: "repeat(8, 25rem)",
                sm: "repeat(8, 24rem)",
                md: "repeat(4, 24rem)",
                lg: "repeat(4, 25rem)",
                xl: "repeat(4, 26rem)",
              },
              gridTemplateAreas: {
                xs: ` "tesla tesla tesla"
                "calendar calendar calendar"
              "journal journal journal"
              "asociacion asociacion asociacion"
              "gifApp gifApp gifApp"
              "heroes heroes heroes"
              "amInd amInd amInd"
              "ecomReact ecomReact ecomReact"
             `,

                md: `"tesla tesla tesla calendar calendar calendar "
            "journal journal journal asociacion asociacion asociacion "
            "heroes heroes heroes amInd amInd amInd"
            "ecomReact ecomReact ecomReact gifApp gifApp gifApp"`,
              },
              gap: { xs: 5, md: 7, lg: 8.5, xl: 9 },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                gridArea: "ecomReact",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1704950720/OffStore_-_Google_Chrome_11_1_20_siypls.webp)",
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
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                  gap: 2,
                }}
                className="eReact"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "none",
                        asoc: "none",
                        gif: "none",
                        heroes: "none",
                        am: "none",
                        eReact: "tech",
                        eJs: "none",
                      })
                    }
                    sx={{
                      display: eReact != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/SantiagoArteche/ecommerce-react-js"
                    target="blink"
                    sx={{
                      display: eReact != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://ecommerce-react-js-arteche.vercel.app"
                    target="blink"
                    sx={{
                      display: eReact != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {eReact === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>React Js</Box>
                          <Box>Bootstrap</Box>
                          <Box
                            sx={{
                              width: {
                                xs: 150,
                                sm: "100%",
                              },
                            }}
                          >
                            React Router Dom
                          </Box>
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
                          <Box>Formik</Box>
                          <Box>Yup</Box>
                          <Box>Firebase</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "asociacion",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1704951010/Asociaci%C3%B3n_Suipacha_-_Google_Chr_z9kx35.webp)",
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
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                  gap: 2,
                }}
                className="asoc"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "none",
                        asoc: "tech",
                        gif: "none",
                        heroes: "none",
                        am: "none",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      display: asoc != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/SantiagoArteche/asociacion"
                    target="blink"
                    sx={{
                      display: asoc != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://asociacion.vercel.app"
                    target="blink"
                    sx={{
                      display: asoc != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {asoc === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>React Js</Box>
                          <Box>MaterialUI</Box>
                          <Box sx={{ width: { xs: 150, sm: "100%" } }}>
                            React Router Dom
                          </Box>
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
                          <Box>Node Js</Box>
                          <Box>Express</Box>
                          <Box>MongoDB</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "tesla",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1711419056/PorfolioImg/tesla-shop_wb6kwj.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "cover" },

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
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                  gap: 2,
                }}
                className="eJs"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "none",
                        asoc: "none",
                        gif: "none",
                        heroes: "none",
                        am: "none",
                        eReact: "none",
                        eJs: "tech",
                      })
                    }
                    sx={{
                      display: eJs != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/SantiagoArteche/tesla-shop"
                    target="blink"
                    sx={{
                      display: eJs != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://tesla-shop-art.vercel.app/"
                    target="blink"
                    sx={{
                      display: eJs != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {eJs === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",
                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>TypeScript</Box>
                          <Box>Tailwind</Box>

                          <Box>Formik</Box>
                          <Box>Yup</Box>
                          <Box>Node Js</Box>
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
                          <Box>PostgreSQL</Box>
                          <Box>Prisma</Box>
                          <Box>Zustand</Box>
                          <Box>Next Js</Box>
                          <Box>Next Auth</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "gifApp",
                backgroundImage:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1707357637/PorfolioImg/GifExpertApp_ev8k9l.webp)",
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
                  ".gifApp": {
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
                  display: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                  gap: 2,
                }}
                className="gifApp"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "none",
                        asoc: "none",
                        gif: "tech",
                        heroes: "none",
                        am: "none",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      display: gif != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/SantiagoArteche/GifExpertApp"
                    target="blink"
                    sx={{
                      display: gif != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://gif-app-san.vercel.app"
                    target="blink"
                    sx={{
                      display: gif != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {gif === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>React Js</Box>
                          <Box>MaterialUI</Box>
                          <Box>Formik</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "amInd",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1704950615/AM_Forever_Chic_-_Google_Chrome_rvkymd.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                  xs: "200% 100%",
                  md: "cover",
                  xl: "cover",
                },
                backgroundPosition: { xs: "10%" },
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
                  gap: 2,
                }}
                className="am"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "none",
                        asoc: "none",
                        gif: "none",
                        heroes: "none",
                        am: "tech",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      display: am != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/AM-Indumentaria/am_foreverChic"
                    target="blink"
                    sx={{
                      display: am != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://am-foreverchic.vercel.app"
                    target="blink"
                    sx={{
                      display: am != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {am === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>React Js</Box>
                          <Box>MaterialUI</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "calendar",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1709365388/calendar_e1qpd0.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                  xs: "200% 100%",
                  md: "cover",
                  xl: "cover",
                },

                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".calendar": {
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
                  gap: 2,
                }}
                className="calendar"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "tech",
                        journal: "none",
                        asoc: "none",
                        gif: "none",
                        heroes: "none",
                        am: "none",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                      display: calendar != "none" ? "none" : "flex",
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "repo",
                        journal: "none",
                        asoc: "none",
                        gif: "none",
                        heroes: "none",
                        am: "none",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                      display: calendar != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorios" : "Repositories"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://calendar-app-art.vercel.app"
                    target="blink"
                    sx={{
                      display: calendar != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {calendar === "tech" ? (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: { xs: 0, sm: 5 },
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
                          <Box>React Js</Box>
                          <Box>Bootstrap</Box>
                          <Box
                            sx={{
                              width: {
                                xs: innerWidth < 385 ? 110 : 150,
                                sm: "100%",
                              },
                            }}
                          >
                            React Router Dom
                          </Box>
                          <Box>Formik</Box>
                          <Box>Yup</Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: { xs: 4, sm: 3 },
                          }}
                        >
                          <Box>Redux</Box>
                          <Box>Node Js</Box>
                          <Box>Express</Box>
                          <Box>MongoDB</Box>
                          <Box sx={{ width: { xs: 200, sm: "100%" } }}>
                            Json Web Token
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ) : (
                  calendar === "repo" && (
                    <>
                      <ArrowBack
                        sx={{
                          position: "relative",
                          bottom: { xs: "52.4%", sm: "50%" },
                          right: "49%",
                          fontSize: { xs: 40, sm: 45 },
                          ":hover": {
                            color: darkMode === "black" ? "gray" : "black",
                          },
                        }}
                        onClick={() =>
                          handleContentView({
                            calendar: "none",
                            journal: "none",
                            asoc: "none",
                            gif: "none",
                            heroes: "none",
                            am: "none",
                            eReact: "none",
                            eJs: "none",
                          })
                        }
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          component="a"
                          href="https://github.com/SantiagoArteche/calendar-app"
                          target="blink"
                          sx={{
                            fontSize: {
                              xs: "2rem",
                              sm: "2.2rem",
                              md: "2.3rem",
                              lg: "2.3rem",
                            },
                            width: { xs: 300, xl: "100%" },
                            display: "flex",
                            flexWrap: "wrap",
                            textDecoration: "none",
                            color: "white",
                            ":hover": {
                              color: darkMode === "black" ? "gray" : "black",
                            },
                            gap: 1,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            {language === "ES"
                              ? "Calendario Frontend"
                              : "Frontend Calendar"}
                          </Box>
                          <ArrowOutward sx={{ fontSize: 37 }} />
                        </Box>
                        <Box
                          component="a"
                          href="https://github.com/SantiagoArteche/calendar-app-api"
                          target="blink"
                          sx={{
                            fontSize: {
                              xs: "2rem",
                              sm: "2.2rem",
                              md: "2.3rem",
                              lg: "2.3rem",
                            },
                            width: { xs: 300, xl: "100%" },
                            display: "flex",
                            flexWrap: "wrap",
                            textDecoration: "none",
                            color: "white",
                            ":hover": {
                              color: darkMode === "black" ? "gray" : "black",
                            },
                            gap: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 5,
                          }}
                        >
                          <Box>
                            {language === "ES"
                              ? "Calendario Backend"
                              : "Backend Calendar"}
                          </Box>
                          <ArrowOutward sx={{ fontSize: 37 }} />
                        </Box>
                      </Box>
                    </>
                  )
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "journal",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1709364989/Journal_App_-_Google_Chrome_2_3__afkgtn.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                  xs: "200% 100%",
                  md: "cover",
                  xl: "cover",
                },

                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".journal": {
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
                  gap: 2,
                }}
                className="journal"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "tech",
                        asoc: "none",
                        gif: "none",
                        heroes: "none",
                        am: "none",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      display: journal != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowForward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/SantiagoArteche/journal-app"
                    target="blink"
                    sx={{
                      display: journal != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://journal-app-art.vercel.app/"
                    target="blink"
                    sx={{
                      display: journal != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {journal === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>React Js</Box>
                          <Box>MaterialUI</Box>
                          <Box sx={{ width: { xs: 150, sm: "100%" } }}>
                            React Router Dom
                          </Box>
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
                          {" "}
                          <Box>Yup</Box>
                          <Box>Redux</Box>
                          <Box>Firebase</Box>
                          <Box>FirebaseAuth</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                gridArea: "heroes",
                background:
                  "url(https://res.cloudinary.com/santiago-arteche/image/upload/v1708325714/HeroesApp_-_Google_Chrome_19_2_2_3_vkuy6g.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                  xs: "cover",
                },
                backgroundPosition: { xs: "10%" },
                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
                border:
                  darkMode === "black" ? "2px solid white" : "2px solid black",
                ":hover": {
                  background: "#161c908a",
                  transition: "1s",
                  ".heroes": {
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
                  gap: 2,
                }}
                className="heroes"
              >
                <Box
                  sx={{
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.4rem",
                      md: "2.5rem",
                      lg: "2.8rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <Box
                    onClick={() =>
                      handleContentView({
                        calendar: "none",
                        journal: "none",
                        asoc: "none",
                        gif: "none",
                        heroes: "tech",
                        am: "none",
                        eReact: "none",
                        eJs: "none",
                      })
                    }
                    sx={{
                      display: heroes != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Tecnologías" : "Technologies"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://github.com/SantiagoArteche/heroes-app"
                    target="blink"
                    sx={{
                      display: heroes != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>
                      {language === "ES" ? "Repositorio" : "Repository"}
                    </Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                  <Box
                    component="a"
                    href="https://heroes-app-art.vercel.app"
                    target="blink"
                    sx={{
                      display: heroes != "none" ? "none" : "flex",
                      color: "white",
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        color: darkMode === "black" ? "gray" : "black",
                      },
                    }}
                  >
                    <Box>{language === "ES" ? "Página" : "Page"}</Box>
                    <ArrowOutward sx={{ fontSize: 37 }} />
                  </Box>
                </Box>
                {heroes === "tech" && (
                  <>
                    <ArrowBack
                      sx={{
                        position: "relative",
                        bottom: { xs: "52.4%", sm: "50%" },
                        right: "49%",
                        fontSize: { xs: 40, sm: 45 },
                        ":hover": {
                          color: darkMode === "black" ? "gray" : "black",
                        },
                      }}
                      onClick={() =>
                        handleContentView({
                          calendar: "none",
                          journal: "none",
                          asoc: "none",
                          gif: "none",
                          heroes: "none",
                          am: "none",
                          eReact: "none",
                          eJs: "none",
                        })
                      }
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        position: "absolute",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            xs: "1.5rem",

                            lg: "1.8rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 5,
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
                          <Box>React Js</Box>
                          <Box>MaterialUI</Box>
                          <Box sx={{ width: { xs: 150, sm: "100%" } }}>
                            React Router Dom
                          </Box>
                          <Box>Formik</Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
