import React from "react";
import { Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import questTheme from "src/MyDesignSystemLightTheme";

function App() {
  return (
    <HelmetProvider>
      <div>FRED</div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes></Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
