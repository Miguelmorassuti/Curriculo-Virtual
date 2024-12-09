import { Box, Grid2, Typography } from "@mui/material";

import "./style.css";

const AboutMeBox = () => {
  return (
    <Box className="aboutMeContainer">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <img
            src="src/assets/images/jovem_programando.webp"
            alt=""
            width="80%"
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h3"
            width="100%"
            fontWeight="bold"
            className="title"
          >
            SOBRE MIM
          </Typography>
          <Typography variant="h5" color="white" textAlign="start">
            Eu sou um{" "}
            <Typography
              component="span"
              color="rgb(188, 64, 230)"
              fontWeight="bold"
              variant="h5"
            >
              Desenvolvedor Web Fullstack
            </Typography>{" "}
            apaixonado por tecnologia e inovação.
          </Typography>

          <Typography variant="h6" color="white" textAlign="start">
            Sou Bacharel em Ciência da Computação, com mais de 2 anos de
            experiência profissional no setor de tecnologia e quase 5 anos de
            prática em programação. Ao longo da minha jornada, atuei em startup,
            onde desenvolvi soluções completas, desde o backend até o frontend,
            com foco na entrega de resultados.
            <br />
            <br /> Atualmente, estou em busca de novas oportunidades para
            aplicar minha experiência e continuar crescendo profissionalmente.
            Estou comprometido em agregar valor à equipe e contribuir para o
            sucesso dos projetos com habilidades técnicas sólidas, criatividade
            e trabalho em equipe.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AboutMeBox;
