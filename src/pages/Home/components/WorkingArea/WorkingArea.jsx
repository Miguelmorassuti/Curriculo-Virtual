import { Box, Grid2, Typography } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudIcon from "@mui/icons-material/Cloud";

const WorkingArea = () => {
  return (
    <Grid2
      container
      bgcolor="#5d0e5c"
      width="100%"
      marginTop={4}
      paddingY={6}
      paddingX={3}
    >
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        width="100%"
        fontWeight="bold"
      >
        ÁREA DE ATUAÇÃO
      </Typography>
      <Box display="flex" justifyContent="space-around" width="100%">
        <Box mt={4} maxWidth="350px" textAlign="start">
          <CodeOffIcon fontSize="large" />
          <Typography variant="h5" color="white" fontWeight="bold">
            Desenvolvimento Front-End
          </Typography>
          <Typography color="white" textAlign="start" mt={3}>
            O desenvolvimento web desempenha um papel essencial na criação de
            experiências online. Websites eficazes são cruciais para o
            crescimento e sucesso de empresas e negócios, tornando-se uma
            ferramenta indispensável na era digital.
          </Typography>
        </Box>
        <Box mt={4} maxWidth="350px" textAlign="start">
          <DataObjectIcon fontSize="large" />
          <Typography variant="h5" color="white" fontWeight="bold">
            Desenvolvimento Back-end
          </Typography>
          <Typography color="white" textAlign="start" mt={3}>
            O desenvolvimento web desempenha um papel essencial na criação de
            experiências online. Websites eficazes são cruciais para o
            crescimento e sucesso de empresas e negócios, tornando-se uma
            ferramenta indispensável na era digital.
          </Typography>
        </Box>
        <Box mt={4} maxWidth="350px" textAlign="start">
          <CloudIcon fontSize="large" />
          <Typography variant="h5" color="white" fontWeight="bold">
            Banco de Dados & Cloud
          </Typography>
          <Typography color="white" textAlign="start" mt={3}>
            O desenvolvimento web desempenha um papel essencial na criação de
            experiências online. Websites eficazes são cruciais para o
            crescimento e sucesso de empresas e negócios, tornando-se uma
            ferramenta indispensável na era digital.
          </Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default WorkingArea;
