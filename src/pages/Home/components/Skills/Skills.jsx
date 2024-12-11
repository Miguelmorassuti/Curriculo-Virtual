import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Link,
  Typography,
} from "@mui/material";

import "./style.css";
import { skills } from "src/constants";

const Skills = () => {
  return (
    <Grid2 container spacing={4} className="skillsContainer">
      <Grid2 size={12} id="skills">
        <Typography variant="h3" color="white" fontWeight="bold">
          HABILIDADES
        </Typography>
      </Grid2>
      {skills.map((skill) => (
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

              <Box className="cardBack">
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
                <Link
                  href={skill?.link}
                  target="_blank"
                  mt={1}
                  fontWeight="bold"
                  underline="none"
                >
                  <Typography color="#5d0e5c" fontWeight="bold">
                    CLIQUE AQUI
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Skills;
