import { Grid2, Typography } from "@mui/material";

const AboutMeBox = () => {
  return (
    <Grid2 container bgcolor="#5d0e5c" width="100%" paddingY={6} paddingX={3}>
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        width="100%"
        fontWeight="bold"
      >
        SOBRE MIM
      </Typography>

      <Typography variant="h6" color="white" mt={4}>
        Meu nome é Miguel Morassuti e eu sou um apaixonado por tecnologia que
        decidiu trilhar o caminho da programação. Trabalhei com projetos
        envolvendo gestão educacional, API's e banco de dados. Atualmente estou
        cursando análise e desenvolvimento de sistemas (ADS) e focando no
        desenvolvimento FullStack.
      </Typography>
    </Grid2>
  );
};

export default AboutMeBox;
