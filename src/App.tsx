import React from "react";
import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/DarkMode/theme";
import { Container } from "./components/DarkMode/styled";
import { GlobaclStyled } from "./components/DarkMode/GlobalStyled";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobaclStyled />
      <Container>
        <h1>DarkMode</h1>
        <button onClick={() => themeToggler()}>theme</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
