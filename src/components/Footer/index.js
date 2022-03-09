import React from "react";
import { Box, Container, Typography } from "@mui/material";
import logo from '../../assets/img/logo.png';
import Algorismic from '../../assets/img/Algorismic.png';
import { useNavigate } from "react-router-dom";


function Footer() {
    let navigate = useNavigate();

    return (
        <Box sx={{padding:'32px 0', background: '#C4C4C4'}}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box component='a' sx={{display: 'flex', alignItems: 'center', '&:hover':{cursor: 'pointer'}}} onClick={() => navigate('/')}>
                    <img src={logo} width='30px' alt="logo" />
                    <Typography color='primary' sx={{fontFamily: 'RozhaOne', fontSize: 32, ml: 1}}>BookShop</Typography>
                </Box>
                <Box sx={{'&:hover':{cursor: 'pointer'}}} onClick={() => window.open("https://www.algorismic.uz/")}>
                    <img src={Algorismic} width='200' alt="Algorismic" />
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;