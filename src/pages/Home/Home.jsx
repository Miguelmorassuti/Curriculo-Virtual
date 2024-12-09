import { Box, Grid2, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./style.css";
import { AboutMeBox, Skills, WorkingArea } from "./components";

function Home() {
  return (
    <Box height="100%" width="100%">
      <Box height="100vh" minHeight={900}>
        <Grid2 container>
          <Grid2 item size={4}>
            <Typography color="white">Miguel Dev</Typography>
          </Grid2>
          <Grid2 item size={2}>
            <Typography color="white">Sobre mim</Typography>
          </Grid2>
          <Grid2 item size={2}>
            <Typography color="white">Áreas de atuação</Typography>
          </Grid2>
          <Grid2 item size={2}>
            <Typography color="white">Habilidades</Typography>
          </Grid2>
        </Grid2>

        <Grid2 container marginTop={20} spacing={2}>
          <Grid2 item size={{ md: 6, xs: 12 }}>
            <Typography variant="h4" color="white">
              Opa, tudo bem? Me chamo Miguel, seja bem-vindo ao meu currículo
              virtual!
            </Typography>
            <Typography variant="h6" color="white">
              Bacharel em Ciência da Computação pelo UNIVEM | Desenvolvedor Web
              Fullstack
            </Typography>
            <Box display="flex" justifyContent="center" mt={2} gap={2}>
              <Box color="#5d0e5c">
                <LinkedInIcon fontSize="large" />
              </Box>
              <Box color="#5d0e5c">
                <GitHubIcon fontSize="large" />
              </Box>
            </Box>
          </Grid2>
          <Grid2 item size={{ md: 6, xs: 12 }}>
            <Box className="profilePhoto">
              <img src="src/assets/images/fotominha.png" alt="" />
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <AboutMeBox />

      <WorkingArea />

      <Skills />
    </Box>
  );
}

export default Home;
