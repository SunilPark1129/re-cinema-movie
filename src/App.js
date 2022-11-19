/*
Project Name: Cinema Movie
Info: Search for a movie and fetch movie posters and information
Version: This is a rebuild of a project created in 2021
Developer: Sunil Park
*/

import React, { useState } from "react";
import "./font.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./components/Theme";
import { GlobalStyles } from "./components/styles/Global";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Info from "./pages/Info/Info";
import ErrorPage from "./pages/Error/ErrorPage";

import Main from "./pages/Search/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { StyledContainer } from "./components/styles/Container.styled";

function App() {
  const [colorMode, setColorMode] = useState(true);

  return (
    <ThemeProvider theme={colorMode ? lightMode : darkMode}>
      <GlobalStyles />
      <Router>
        <Navbar
          colorMode={colorMode}
          setColorMode={(obj) => setColorMode(obj)}
        />
        <StyledContainer>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />}>
              <Route path=":id" element={<Main />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </StyledContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
