import React from "react";
import { Card, Typography } from "@mui/material";
import book from '../../assets/img/book.png';
import { useNavigate } from "react-router-dom";

const Category = (props) =>  {
    let navigate = useNavigate();

    return (
        <Card sx={{
            padding: '40px 30px', 
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
        }} onClick={() => navigate('books', {state: {link: props.link}})}>
            <img src={book} alt="book" />
            <Typography sx={{fontSize: 20, textAlign: 'center', mt: 2}}>
                {props.name}
            </Typography>
        </Card>
    )
    
}

export default Category;