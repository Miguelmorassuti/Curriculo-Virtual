import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

const skillsData = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação versátil usada para desenvolver aplicativos web, servidores e muito mais.",
    image: "/src/assets/images/logo_js.png",
  },
  {
    id: 2,
    title: "React",
    description:
      "React é uma biblioteca JavaScript para criar interfaces de usuário interativas e componentes reutilizáveis.",
    image: "/src/assets/images/logo_react.png",
  },
  {
    id: 3,
    title: "Node.js",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/typescript.png",
  },
  {
    id: 4,
    title: "Ruby On Rails",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_rails.png",
  },
  {
    id: 5,
    title: "HTML5",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_html.png",
  },
  {
    id: 6,
    title: "CSS3",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_css.png",
  },
  {
    id: 7,
    title: "Linux",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_linux.png",
  },
  {
    id: 8,
    title: "SQL",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_sql.png",
  },
  {
    id: 8,
    title: "Python",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_python.png",
  },
  {
    id: 8,
    title: "MySQL",
    description:
      "Node.js é uma plataforma para construir aplicativos de rede escaláveis usando JavaScript no lado do servidor.",
    image: "/src/assets/images/logo_mysql.png",
  },
];

const Skills = () => {
  return (
    <Grid2
      container
      spacing={4}
      // bgcolor="#5d0e5c"
      width="100%"
      paddingY={6}
      paddingX={3}
      mt={4}
    >
      {skillsData.map((skill) => (
        <Grid2 key={skill.id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
            <Box width="100%">
              <CardMedia
                component="img"
                alt={skill.title}
                image={skill.image}
                sx={{
                  width: "120px", // Define largura fixa
                  height: "120px", // Define altura fixa
                  objectFit: "cover", // Mantém a proporção da imagem
                  borderRadius: "8px", // Adiciona bordas arredondadas (opcional
                  margin: "0 auto", // Centraliza a imagem no contêiner
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h4" color="white" fontWeight="bold" mb={2}>
                {skill.title}
              </Typography>
              <Typography variant="body2" color="white">
                {skill.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Documentação</Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Skills;
