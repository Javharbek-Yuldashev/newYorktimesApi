import React from "react";
import RozhaOne from '../../assets/fonts/RozhaOne-Regular.ttf'
import { Box, CircularProgress, Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Book from "../Book";
import { useLocation } from "react-router-dom";

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

const Books = () =>  {
    let location = useLocation();
    // console.log(location.state);

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);



    React.useEffect(() => {
        fetch(`https://api.nytimes.com/svc/books/v3/lists/2019-01-20/${location.state.link}.json?api-key=UHWF38AMrggEB69yzgATAufPv8Wu8WKr`)
                .then(res =>  res.json())
                .then(res => {
                    setData(res.results)
                    setLoading(false)
                })
        }, [])

        console.log(data.books);
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: '#EEE'}}>
                <CssBaseline />
                <Header />
                <Box>
                    <Container sx={{padding: '90px 0'}}>
                        <Typography sx={{fontSize: 50, textAlign: 'center'}}>
                            {data.display_name}
                        </Typography>

                        {
                            loading ?
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box> 
                            : 
                            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, mt: 6}}>
                                {data.books.map(e => {
                                    console.log(e);
                                    return (
                                        <Book 
                                            title={e.title} 
                                            image={e.book_image}
                                            author={e.author}
                                            price={e.price}
                                            buy={e.buy_links[0].url}
                                            information={e.amazon_product_url}
                                        />
                                    )
                                })}
                            </Box>
                        }
                    </Container>
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    )
    
}

export default Books;