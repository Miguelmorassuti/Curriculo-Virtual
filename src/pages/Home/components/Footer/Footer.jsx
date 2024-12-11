import { Box, Divider, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box minHeight={100} width="100%">
      <Divider color="#5d0e5c" />
      <Box display="flex" justifyContent="center" gap={2} p={2}>
        <Link
          href="https://www.linkedin.com/in/miguel-morassuti"
          target="_blank"
        >
          <LinkedInIcon color="secondary" />
        </Link>
        <Link href="https://github.com/Miguelmorassuti" target="_blank">
          <GitHubIcon color="secondary" />
        </Link>
        <Link href="https://www.instagram.com/miguelmorassuti/" target="_blank">
          <InstagramIcon color="secondary" />
        </Link>
      </Box>
      <Typography color="#5d0e5c" fontWeight="bolder">
        @2024 Miguel Morassuti - All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
