import { Box, Grid2, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./style.css";
import { AboutMeBox, Skills, WorkingArea, Footer } from "./components";

const Home = () => {
  const pdfUrl = "/curriculo.pdf";

  return (
    <Box width="100%">
      <Box minHeight={900}>
        <Grid2 container className="navigationContainer">
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Typography variant="h6" className="navigationButton" margin="auto">
              MIGUEL DEV
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Link href="#aboutMe" underline="none">
              <Typography variant="h6" className="navigationButton">
                SOBRE MIM
              </Typography>
            </Link>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Link href="#workingArea" underline="none">
              <Typography variant="h6" className="navigationButton">
                ÁREA DE ATUAÇÃO
              </Typography>
            </Link>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 3 }}>
            <Link href="#skills" underline="none">
              <Typography variant="h6" className="navigationButton">
                HABILIDADES
              </Typography>
            </Link>
          </Grid2>
        </Grid2>
        <Grid2 container marginTop={20} spacing={2} width={"100%"}>
          <Grid2 item size={{ md: 6, xs: 12 }}>
            <Typography variant="h4" color="white">
              Opa, tudo bem? Me chamo Miguel, seja bem-vindo ao meu currículo
              virtual!
            </Typography>
            <Typography variant="h6" color="white" mt={2}>
              Bacharel em Ciência da Computação pelo UNIVEM | Desenvolvedor Web
              Fullstack
            </Typography>
            <Box mt={2}>
              <Link
                color="#5d0e5c"
                href={pdfUrl}
                target="_blank"
                rel="noopener"
              >
                <Typography variant="h6">CURRÍCULO - PDF</Typography>
              </Link>
            </Box>
            <Box display="flex" justifyContent="center" my={3} gap={2}>
              <Link
                href="https://www.linkedin.com/in/miguel-morassuti"
                target="_blank"
                color="#5d0e5c"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="https://github.com/Miguelmorassuti"
                target="_blank"
                color="#5d0e5c"
              >
                <GitHubIcon fontSize="large" />
              </Link>
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

      <Footer />
    </Box>
  );
};

export default Home;
