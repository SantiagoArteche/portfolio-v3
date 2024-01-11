export const WeatherPresentational = ({
  weather,
  isNight,
  Box,
 
  hour,
  darkMode,
  currentTime,
}) => {
  return (
    <Box
      sx={{
        gridArea: "weather",
        background: `${
          isNight
            ? darkMode === "black"
              ? "linear-gradient(61deg, #020255 50%, #07346b 100%)"
              : "linear-gradient(61deg, #020255 -50%, #07346b 100%)"
            : "linear-gradient(61deg, #0606b8 0%, #4999fa 100%)"
        }`,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            gap: 1.5,
            marginLeft: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              fontWeight: "bold",
            }}
          >
            <Box
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.3rem",
                  md: "3rem",
                  lg: "3.5rem",
                  xl: "4rem",
                },
              }}
            >
              {weather?.main?.temp
                ? `${(weather.main.temp - 273.15).toFixed(0)}°`
                : "..."}
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                lg: "1.8rem",
                xl: "2rem",
              },
            }}
          >
            {currentTime}
            {hour >= "12" ? " PM" : " AM"}
          </Box>
          <Box
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                lg: "1.8rem",
                xl: "2rem",
              },
            }}
          >
            Rosario, Santa Fe, Argentina.
          </Box>
        </Box>
        <Box
          sx={{
            background: `${
              isNight
                ? "linear-gradient(to bottom right,#3f51b5,#ab47bc 70%)"
                : "rgb(229, 188, 4)"
            }`,
            height: {
              xs: "6rem",
              sm: "10rem",
              md: "11rem",
              lg: "11.5rem",
              xl: "12rem",
            },
            width: {
              xs: "8rem",
              sm: "10rem",
              md: "11.5rem",
              lg: "11.5rem",
              xl: "12rem",
            },
            borderRadius: "46%",
            boxShadow: `${
              isNight ? "1px 1px 30px #512da8" : "0px 0px 17px 8px #9b8506ee"
            }`,
            marginRight: 2,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
