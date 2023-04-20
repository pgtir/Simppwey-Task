import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(245, 75%, 52%)",
      dark: "hsl(223, 47%, 23%)",
      light: "hsl(225, 100%, 98%)",
    },
    secondary: {
      main: "hsl(224, 23%, 55%)",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
