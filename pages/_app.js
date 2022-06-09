import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes"
import Fonts from '../components/Fonts'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');


  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Fonts />
    <GlobalStyles />
    <Component theme={theme} setTheme={setTheme} {...pageProps} />
  </ThemeProvider>
}

export default MyApp

const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: all 0.50s linear;
  margin: 0;
  background-image: ${({ theme }) => theme.gradient};
}`
