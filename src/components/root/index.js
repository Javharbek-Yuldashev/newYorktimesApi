import React from "react";
import RozhaOne from '../../assets/fonts/RozhaOne-Regular.ttf'
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Categories from "../Categories";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3762CC',
        },
    },
    typography: {
      fontFamily: 'RozhaOne',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'RozhaOne';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('RozhaOne'), local('RozhaOne-Regular'), url(${RozhaOne}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

class Main extends React.Component {

    render() {

        return (
            <ThemeProvider theme={theme}>
                <Box sx={{backgroundColor: '#EEE'}}>
                    <CssBaseline />
                    <Header />
                    <Categories />
                    <Footer />
                </Box>
            </ThemeProvider>
        )
    }
}

export default Main;