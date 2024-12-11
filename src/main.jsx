import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./index.css";
import Home from "./pages/Home/Home";

const theme = createTheme({
  typography: {
    fontFamily: "roboto, Arial, sans-serif",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </StrictMode>
);
