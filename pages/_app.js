import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');


  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Component theme={theme} setTheme={setTheme} {...pageProps} />
  </ThemeProvider>
}

export default MyApp

const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear;
  margin: 0;
}`
