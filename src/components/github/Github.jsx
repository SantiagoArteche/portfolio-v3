import { Box } from "@mui/material";
export const Github = () => {
  return (
    <>
      <Box
        component={"a"}
        href="https://github.com/SantiagoArteche"
        sx={{
          gridArea: "github",
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.607), rgba(10, 10, 10, 0.607)), url(/img/githubGiph.gif)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          ":hover": { transform: "scale(1.04)" },
          transition: "0.5s",
        }}
      ></Box>
    </>
  );
};
