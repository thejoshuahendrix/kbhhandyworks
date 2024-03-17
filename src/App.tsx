import { useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./themes";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/layout/Hero";
import Home from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";
import { Resume } from "./components/pages/Resume";
import { Privacy } from "./components/pages/Privacy";

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  transition: background-color 0.3s ease;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
  }
`;

const PageWrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);
  const changeTheme = () => {
    setTheme(theme === DarkTheme ? LightTheme : DarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router>
          <Navbar themeChanger={changeTheme} />
          <Hero />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </PageWrapper>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
