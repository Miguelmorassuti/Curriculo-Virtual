import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Link,
  Typography,
} from "@mui/material";

import "./style.css";

const skillsData = [
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação versátil usada para desenvolver aplicativos web, servidores e muito mais.",
    image: "/src/assets/images/logo_js.png",
    level: "Conhecimento Avancado",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript é uma linguagem baseada em JavaScript que adiciona tipagem estática opcional, tornando o desenvolvimento mais seguro e escalável.",
    image: "/src/assets/images/typescript.png",
    level: "Conhecimento Intermediário",
  },
  {
    title: "React",
    description:
      "React é uma biblioteca JavaScript para criar interfaces de usuário interativas e componentes reutilizáveis.",
    image: "/src/assets/images/logo_react.png",
    level: "Conhecimento Avancado",
  },
  {
    title: "HTML5",
    description:
      "HTML5 é a linguagem padrão para a criação de páginas web, oferecendo estrutura e suporte a elementos multimídia.",
    image: "/src/assets/images/logo_html.png",
    level: "Conhecimento Avancado",
  },
  {
    title: "CSS3",
    description:
      "CSS3 é utilizado para estilizar páginas web e criar designs responsivos e interativos.",
    image: "/src/assets/images/logo_css.png",
    level: "Conhecimento Avancado",
  },
  {
    title: "Ruby On Rails",
    description:
      "Ruby on Rails é um framework de desenvolvimento web conhecido por sua produtividade e simplicidade.",
    image: "/src/assets/images/logo_rails.png",
    level: "Conhecimento Intermediário",
  },
  {
    title: "Python",
    description:
      "Python é uma linguagem de programação poderosa e versátil, utilizada para desenvolvimento web, automação e análise de dados.",
    image: "/src/assets/images/logo_python.png",
    level: "Conhecimento Intermediário",
  },
  {
    title: "SQL",
    description:
      "SQL é uma linguagem para gerenciar e consultar bancos de dados relacionais.",
    image: "/src/assets/images/logo_sql.png",
    level: "Conhecimento Avancado",
  },
  {
    title: "MySQL",
    description:
      "MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado.",
    image: "/src/assets/images/logo_mysql.png",
    level: "Conhecimento Intermediário",
  },
  {
    title: "PostgreSQL",
    description:
      "PostgreSQL é um sistema de gerenciamento de banco de dados avançado e altamente extensível.",
    image: "/src/assets/images/logo_postgre.png",
    level: "Conhecimento Intermediário",
  },
  {
    title: "Linux",
    description:
      "Linux é um sistema operacional open-source amplamente utilizado para servidores, desenvolvimento e automação.",
    image: "/src/assets/images/logo_linux.png",
    level: "Conhecimento Intermediário",
  },
  {
    title: "GIT/Github",
    description:
      "GIT é um sistema de controle de versão distribuído e o GitHub é uma plataforma de hospedagem para projetos baseados em GIT.",
    image: "/src/assets/images/logo_github.png",
    level: "Conhecimento Avancado",
  },
];

const Skills = () => {
  return (
    <Grid2
      container
      spacing={4}
      width="100%"
      paddingY={6}
      paddingX={3}
      justifyContent="center"
      mt={4}
    >
      <Grid2 size={12}>
        <Typography variant="h2" color="white" fontWeight="bold">
          HABILIDADES
        </Typography>
      </Grid2>
      {skillsData.map((skill) => (
        <Grid2 key={skill?.title} xs={12} sm={6} md={4}>
          <Box className="card">
            <Box className="cardInner">
              <Box className="cardFront">
                <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
                  <Box width="100%">
                    <CardMedia
                      component="img"
                      alt={skill?.title}
                      image={skill?.image}
                      sx={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        margin: "0 auto",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h4"
                      color="white"
                      fontWeight="bold"
                      mb={2}
                    >
                      {skill?.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {skill?.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography color="white" fontWeight="bold">
                      {skill?.level}
                    </Typography>
                  </CardActions>
                </Card>
              </Box>

              <Box className={"cardBack"}>
                <Typography
                  variant="h5"
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                >
                  {skill?.title}
                </Typography>
                <Typography variant="body2" color="white" textAlign="center">
                  Acesse a documentação:
                </Typography>
                <Typography>{skill?.level}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Skills;
