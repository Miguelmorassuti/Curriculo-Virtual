import { Box, Grid2, Typography } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudIcon from "@mui/icons-material/Cloud";

import "./style.css";

const WorkingArea = () => {
  return (
    <Grid2 container className="container" columnGap={8}>
      <Grid2 size={12}>
        <Typography variant="h3" className="title">
          ÁREA DE ATUAÇÃO
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }} mt={4} className="activityCard">
        <CodeOffIcon className="icon" fontSize="50px" />
        <Typography variant="h5" color="white" fontWeight="bold">
          Desenvolvimento Front-End
        </Typography>
        <Typography color="white" textAlign="start" mt={3}>
          O desenvolvimento web desempenha um papel essencial na criação de
          experiências online. Websites eficazes são cruciais para o crescimento
          e sucesso de empresas e negócios, tornando-se uma ferramenta
          indispensável na era digital.
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }} mt={4} className="activityCard">
        <DataObjectIcon className="icon" fontSize="50px" />
        <Typography variant="h5" color="white" fontWeight="bold">
          Desenvolvimento Back-end
        </Typography>
        <Typography color="white" textAlign="start" mt={3}>
          O desenvolvimento web desempenha um papel essencial na criação de
          experiências online. Websites eficazes são cruciais para o crescimento
          e sucesso de empresas e negócios, tornando-se uma ferramenta
          indispensável na era digital.
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }} mt={4} className="activityCard">
        <CloudIcon className="icon" fontSize="50px" />
        <Typography variant="h5" color="white" fontWeight="bold">
          Banco de Dados & Cloud
        </Typography>
        <Typography color="white" textAlign="start" mt={3}>
          O desenvolvimento web desempenha um papel essencial na criação de
          experiências online. Websites eficazes são cruciais para o crescimento
          e sucesso de empresas e negócios, tornando-se uma ferramenta
          indispensável na era digital.
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default WorkingArea;
