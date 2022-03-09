import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import book from '../../assets/img/book.png';
import { Box } from "@mui/system";

class Book extends React.Component {
    render() {
        // const [title, image, author, price, buy, information] = this.props
        // console.log(this.props);
        return (
            <Card sx={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderRadius: 5, 
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                transition: '0.2s',
                '&:hover': {
                    cursor: 'pointer',
                    boxShadow: '0px 5px 12px rgba(0, 0, 0, 0.4)',
                }
            }}>
                <img src={this.props.image} alt="book" width="100%"/>
                <CardContent>
                    <Typography sx={{fontSize: 16, mt: 2}}>
                        Title: {this.props.title}
                    </Typography>
                    <Typography sx={{fontSize: 16, mt: 2}}>
                        Author: {this.props.author}
                    </Typography>
                    <Typography sx={{fontSize: 16, mt: 2}}>
                        Price: {this.props.price} $
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-evenly', mt: 2}}>
                        <Button variant="contained" onClick={() => window.open(this.props.buy)}>Buy</Button>
                        <Button variant="contained" onClick={() => window.open(this.props.information)}>More</Button>
                    </Box>
                </CardContent>
            </Card>
        )
    }
}

export default Book;