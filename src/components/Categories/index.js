import React from "react";
import { Container, Box, Typography, CircularProgress } from "@mui/material";
import Category from "../Category";


class Categories extends React.Component {

    state = {
        categories: [],
        loading: true
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=UHWF38AMrggEB69yzgATAufPv8Wu8WKr")
                .then(res =>  res.json())
                .then(res => {
                    console.log(res.results);
                this.setState({
                    categories: res.results,
                    loading: false
                })
            })
        }

    render() {
        return(
            <Box>
                <Container sx={{padding: '90px 0'}}>
                    <Typography sx={{fontSize: 50, textAlign: 'center'}}>
                        Categories
                    </Typography>

                        {this.state.loading ? 
                         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                         </Box>
                            : 
                        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, mt: 6}}>
                            {this.state.categories.map(e => {
                                return (
                                    <Category name={e.display_name} link={e.list_name_encoded}/>
                                )
                            })}
                        </Box>
                    }
                </Container>
            </Box>
        )
    }
}

export default Categories;