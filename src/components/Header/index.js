import { alpha, Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logo from '../../assets/img/logo.png';
import home from '../../assets/img/Home.png'
import {  useNavigate } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

const Header = () => {

    let navigate =useNavigate()

        return (
            <Box>
                <Box sx={{backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', padding: '16px 0'}}>
                    <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box component='a' sx={{display: 'flex', alignItems: 'center', '&:hover':{cursor: 'pointer'}}} onClick={() => navigate('/')}>
                            <img src={logo} width='30px' alt="logo" />
                            <Typography color='primary' sx={{fontFamily: 'RozhaOne', fontSize: 32, ml: 1}}>BookShop</Typography>
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Container>
                </Box>
                <Box position='relative'>
                    <img src={home} alt="homeImg" width='100%'/>
                    <Container sx={{position: 'absolute', top: 220, left: 95}}>
                        <Typography sx={{fontSize: 74, textAlign: 'center', color: '#fff', textShadow: '0px 7px 7px rgba(0, 0, 0, 0.7)'}}>
                            BookShop - easy buy books online
                        </Typography>
                    </Container>
                </Box>
            </Box>
        )
    
}

export default Header;